import { preview } from "vite";
import puppeteer from "puppeteer";
import fs from "node:fs";
import path from "node:path";

const ROUTES = ["/", "/projects/flickrz", "/projects/makinarocks", "/projects/trynectar"];
const PORT = 4174;

async function main() {
  const server = await preview({ preview: { port: PORT, strictPort: true } });
  const base = `http://localhost:${PORT}`;

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  for (const route of ROUTES) {
    const page = await browser.newPage();
    await page.goto(base + route, { waitUntil: "networkidle0", timeout: 30000 });
    await page.waitForSelector("#root h1", { timeout: 10000 });
    const html = await page.content();

    const outDir = route === "/" ? "dist" : path.join("dist", route);
    fs.mkdirSync(outDir, { recursive: true });
    const outFile = path.join(outDir, "index.html");
    fs.writeFileSync(outFile, html);
    console.log(`Prerendered ${route} -> ${outFile}`);

    await page.close();
  }

  await browser.close();
  await new Promise((resolve) => server.httpServer.close(resolve));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
