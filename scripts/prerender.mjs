import fs from "node:fs";
import path from "node:path";
import { render } from "../dist-ssr/entry-server.js";

const ROUTES = ["/", "/projects/flickrz", "/projects/makinarocks", "/projects/trynectar"];

const template = fs.readFileSync("dist/index.html", "utf8");

for (const route of ROUTES) {
  const appHtml = render(route);
  const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const outDir = route === "/" ? "dist" : path.join("dist", route);
  fs.mkdirSync(outDir, { recursive: true });
  const outFile = path.join(outDir, "index.html");
  fs.writeFileSync(outFile, html);
  console.log(`Prerendered ${route} -> ${outFile}`);
}
