// const fetch = require("node-fetch");
const fs = require("fs");

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

  fs.writeFileSync(
    "./src/utils/projects.js",
    `const projects = ${JSON.stringify(enriched, null, 2)};\n\nexport default projects;`
  );

  console.log("✅ Project data updated with metadata from sites!");
}

enrich();
