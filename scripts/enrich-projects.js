const fs = require("fs");
const { URL } = require("url");
const microlinkBase = "https://api.microlink.io/?url=";

const projects = [
  {
    name: "Explore Asheville | Asheville, NC",
    url: "https://www.exploreasheville.com",
    featured: true,
    year: 2024
  },
  {
    name: "Pure Michigan | Michigan, MI",
    url: "https://www.michigan.org",
    year: 2021
  },
  {
    name: "Go Hawaii",
    url: "https://www.gohawaii.com",
    year: 2024
  },
  {
    name: "Visit Music City | Nashville, TN",
    url: "https://www.visitmusiccity.com",
    featured: true,
    year: 2025
  },
  {
    name: "Miles Partnership",
    url: "https://www.milespartnership.com",
    featured: true,
    year: 2023
  },
  {
    name: "Ocean Casino Resort",
    url: "https://www.theoceanac.com",
    year: 2023-2025
  },
  {
    name: "Gulf Shores | Alabama",
    url: "https://www.gulfshores.com",
    year: 2021-2022
  },
  {
    name: "Visit Winston Salem | Winston-Salem, NC",
    url: "https://www.visitwinstonsalem.com",
    year: 2023
  },
  {
    name: "Explore Minnesota",
    url: "https://www.exploreminnesota.com",
    year: 2025
  },
  {
    name: "Capitol Region USA",
    url: "https://www.capitalregionusa.org",
    year: 2021
  },
  {
    name: "Visit Myrtle Beach | Myrtle Beach, SC",
    url: "https://www.visitmyrtlebeach.com",
    year: 2023
  },
  {
    name: "Louisiana Birding",
    url: "https://www.birdinglouisiana.com",
    year: 2023
  },
  {
    name: "Destinations International",
    url: "https://destinationsinternational.org",
    year: 2022,
  },
  {
    name: "Sarasota-Bradenton International Airport",
    url: "https://flysrq.com/",
    year: 2022,
  },
  {
    name: "Miami Beach Convention Center",
    url: "https://www.miamibeachconvention.com",
    year: 2023,
  },
  {
    name: "Visit Arkansas",
    url: "https://www.arkansas.com",
    year: 2023,
  }
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
      year: project.year,
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
