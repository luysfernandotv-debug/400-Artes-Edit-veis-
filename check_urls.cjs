const fs = require("fs");
const path = require("path");

async function checkUrl(url) {
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" } });
    const text = await res.text();
    if (text.includes("Rate exceeded") || text.includes("RateLimited") || text.includes("rate limit") || text.includes("exceeded") || res.status === 429) {
      console.log("\n=== MATCH FOUND IN URL ===");
      console.log("URL:", url);
      console.log("Status:", res.status);
      console.log("Body snippet:", text.substring(0, 500));
    }
  } catch (err) {
    // ignore fetch error
  }
}

async function run() {
  const urls = [
    "https://cdn.utmify.com.br/scripts/utms/latest.js",
    "https://cdn.utmify.com.br/scripts/pixel/pixel.js",
    "https://app.litevideo.net/p.js",
    "https://app.litevideo.net/embed/f74cbff4-1767-422e-a139-d8d034b8c3d7",
    "https://app.litevideo.net/embed/15ddb1bd-b4b6-4bbe-bf5d-35955add71de",
    "https://ipapi.co/json/",
    "https://api.ipify.org?format=json"
  ];

  const files = [];
  function walk(dir) {
    fs.readdirSync(dir).forEach(f => {
      const p = path.join(dir, f);
      if (fs.statSync(p).isDirectory()) walk(p);
      else if (p.endsWith(".ts") || p.endsWith(".tsx") || p.endsWith(".html") || p.endsWith(".js")) files.push(p);
    });
  }
  walk("src");
  files.push("index.html");

  for (const f of files) {
    const content = fs.readFileSync(f, "utf8");
    const found = content.match(/https?:\/\/[^\s"'`<>]+/g) || [];
    for (const u of found) {
      if (!urls.includes(u)) urls.push(u);
    }
  }

  console.log("Checking " + urls.length + " URLs...");
  for (const u of urls) {
    await checkUrl(u);
  }
  console.log("Done checking.");
}

run();
