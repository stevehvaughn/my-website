import { writeFileSync, readFileSync } from 'fs';
import { join } from 'path';
import { validateData } from './validation.js';

// Build-time data generation and validation
export class BuildTimeGenerator {
  constructor() {
    this.outputDir = join(process.cwd(), 'src', 'data', 'generated');
    this.errors = [];
  }

  // Validate all data at build time
  async validateAllData() {
    console.log('🔍 Validating data at build time...');
    
    try {
      // Import and validate performances
      const { default: performances } = await import('./performances.ts');
      performances.forEach((performance, index) => {
        const result = validateData(performance, 'performance');
        if (!result.valid) {
          this.errors.push(`Performance ${index}: ${result.errors.join(', ')}`);
        }
      });

      // Import and validate projects
      const { default: projects } = await import('./projects.ts');
      projects.forEach((project, index) => {
        const result = validateData(project, 'project');
        if (!result.valid) {
          this.errors.push(`Project ${index}: ${result.errors.join(', ')}`);
        }
      });

      // Import and validate ensembles
      const { ensembles } = await import('./ensembles.ts');
      Object.entries(ensembles).forEach(([id, ensemble]) => {
        const result = validateData(ensemble, 'ensemble');
        if (!result.valid) {
          this.errors.push(`Ensemble ${id}: ${result.errors.join(', ')}`);
        }
      });

      if (this.errors.length > 0) {
        console.error('❌ Data validation failed:');
        this.errors.forEach(error => console.error(`  - ${error}`));
        process.exit(1);
      } else {
        console.log('✅ All data validation passed');
      }
    } catch (error) {
      console.error('❌ Build-time validation failed:', error);
      process.exit(1);
    }
  }

  // Generate static data files
  async generateStaticData() {
    console.log('🏗️  Generating static data files...');
    
    try {
      // Create output directory
      await import('fs').then(fs => fs.mkdirSync(this.outputDir, { recursive: true }));

      // Generate performance data with enriched information
      const { default: performances } = await import('./performances.ts');
      const { ensembles } = await import('./ensembles.ts');
      
      const enrichedPerformances = performances.map(performance => ({
        ...performance,
        ensemble: ensembles[performance.ensembleId],
        sortDate: new Date(performance.dates[0]).toISOString(),
        year: new Date(performance.dates[0]).getFullYear()
      }));

      // Sort by date (most recent first)
      enrichedPerformances.sort((a, b) => new Date(b.sortDate) - new Date(a.sortDate));

      // Write enriched performance data
      writeFileSync(
        join(this.outputDir, 'performances.json'),
        JSON.stringify(enrichedPerformances, null, 2)
      );

      // Generate project data with additional metadata
      const { default: projects } = await import('./projects.ts');
      const enrichedProjects = projects.map(project => ({
        ...project,
        slug: project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        domain: new URL(project.url).hostname,
        isExternal: !project.url.includes('localhost'),
        hasImage: !!project.image,
        hasContributions: !!project.contributions
      }));

      // Sort by year (most recent first), then by featured status
      enrichedProjects.sort((a, b) => {
        if (a.featured !== b.featured) return b.featured - a.featured;
        return b.year - a.year;
      });

      writeFileSync(
        join(this.outputDir, 'projects.json'),
        JSON.stringify(enrichedProjects, null, 2)
      );

      // Generate search index
      const searchIndex = {
        performances: enrichedPerformances.map(p => ({
          id: `performance-${p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
          title: p.title,
          content: `${p.title} ${p.ensemble.name} ${p.role} ${p.venue.name}`,
          type: 'performance',
          url: '/music/concerts'
        })),
        projects: enrichedProjects.map(p => ({
          id: `project-${p.slug}`,
          title: p.name,
          content: `${p.name} ${p.title} ${p.description || ''} ${p.client}`,
          type: 'project',
          url: '/dev/projects'
        }))
      };

      writeFileSync(
        join(this.outputDir, 'search-index.json'),
        JSON.stringify(searchIndex, null, 2)
      );

      console.log('✅ Static data generation completed');
    } catch (error) {
      console.error('❌ Static data generation failed:', error);
      process.exit(1);
    }
  }

  // Generate build manifest
  generateBuildManifest() {
    const manifest = {
      buildTime: new Date().toISOString(),
      version: process.env.npm_package_version || '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      dataFiles: [
        'performances.json',
        'projects.json',
        'search-index.json'
      ]
    };

    writeFileSync(
      join(this.outputDir, 'build-manifest.json'),
      JSON.stringify(manifest, null, 2)
    );

    console.log('✅ Build manifest generated');
  }

  // Run all build-time tasks
  async run() {
    console.log('🚀 Starting build-time data generation...');
    
    await this.validateAllData();
    await this.generateStaticData();
    this.generateBuildManifest();
    
    console.log('🎉 Build-time data generation completed successfully!');
  }
}

// Export for use in build scripts
export default new BuildTimeGenerator();