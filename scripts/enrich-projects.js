const fs = require("fs");
const { URL } = require("url");
const microlinkBase = "https://api.microlink.io/?url=";

const projects = [
  { name: "Explore Asheville", url: "https://www.exploreasheville.com", featured: true },
  { name: "Pure Michigan", url: "https://www.michigan.org" },
  { name: "Go Hawaii", url: "https://www.gohawaii.com" },
  { name: "Visit Music City", url: "https://www.visitmusiccity.com", featured: true },
  { name: "Miles Partnership", url: "https://www.milespartnership.com", featured: true },
  { name: "Ocean Casino Resort", url: "https://www.theoceanac.com" },
  { name: "Gulf Shores", url: "https://www.gulfshores.com" },
  { name: "Visit Winston Salem", url: "https://www.visitwinstonsalem.com"}
];

async function enrich() {
  const enriched = [];

  for (const project of projects) {
    const res = await fetch(`${microlinkBase}${project.url}`);
    const json = await res.json();

    const { title, description, image, publisher } = json.data;

    enriched.push({
      ...project,
      title: title || project.name,
      description: description || null,
      image: image?.url || null,
      client: publisher || null,
      role: "Front-End Developer",
      year: 2024,
      featured: project.featured || false,
    });
  }

  const imageDomains = enriched
  .map((proj) => {
    if (!proj.image) return null;
    try {
      const { hostname } = new URL(proj.image);
      return hostname.replace(/^www\./, "");
    } catch {
      return null;
    }
  })
  .filter(Boolean);
  const uniqueDomains = [...new Set(imageDomains)];

  const path = "./next.config.js";
  let nextConfigContent = fs.readFileSync(path, "utf-8");

  // Match existing image domains in the config (assuming a basic structure)
  const domainsMatch = nextConfigContent.match(/domains:\s*\[(.*?)\]/s);

  if (domainsMatch) {
    const existingDomains = domainsMatch[1]
      .split(",")
      .map((d) => d.trim().replace(/['"`]/g, ""))
      .filter(Boolean);

    const mergedDomains = [...new Set([...existingDomains, ...uniqueDomains])];

    // Replace the domains array in the original config content
    const updatedDomainsString =
      "domains: [" +
      mergedDomains.map((d) => `"${d}"`).join(", ") +
      "]";

    nextConfigContent = nextConfigContent.replace(
      /domains:\s*\[(.*?)\]/s,
      updatedDomainsString
    );

    fs.writeFileSync(path, nextConfigContent);
    console.log("✅ next.config.js updated with image domains!");
  } else {
    console.warn("⚠️ Could not find images.domains in next.config.js");
  }

  fs.writeFileSync(
    "./src/utils/projects.js",
    `const projects = ${JSON.stringify(enriched, null, 2)};\n\nexport default projects;`
  );

  console.log("✅ Project data updated with metadata from sites!");
}

enrich();
