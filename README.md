# Portfolio (React)

Vite + React + React Router app. Replaces the old static `portfolio/` folder.

## Run it

```bash
npm install
npm run dev
```

Then open the printed `localhost` URL. `npm run build` produces a static `dist/` you can deploy anywhere
(GitHub Pages, Netlify, Vercel...).

> This was written without a working Node.js in the build sandbox, so it could not be `npm install`'d or
> run here to verify. The code was reviewed carefully (tag balance, import paths, React Flow API shape) but
> if `npm run dev` throws an error, paste it back and it'll get fixed immediately.

## Structure

```
src/
  pages/                 portfolio site (Home, and the 3 case studies under pages/projects)
  layout/PortfolioLayout  shared dark theme wrapper for the pages above
  components/             shared bits: Nav pieces, SkillBars, the two detection-diagram SVGs, ShotsGrid, AgentFlow
  mockups/
    layout/AdminLayout    sidebar + light/dark toggle shared by every /mockups/* screen
    pages/                the 9 "AI Webtoon" admin screens (chapter brief, script writer, ...)
    pipeline/             the Pipeline screen's data (flowData.js) and custom node (AgentNode.jsx),
                          built on React Flow — dragging, zoom/pan, and edge routing are the library's,
                          not hand-rolled, so node dragging actually works now.
public/assets/screens/   drop real screenshots here (see the "To fill in" note on the Flickrz case study)
```

## Routes

- `/` — portfolio home
- `/projects/flickrz`, `/projects/makinarocks`, `/projects/trynectar` — case studies
- `/mockups/pipeline`, `/mockups/chapter-brief`, `/mockups/script-writer`, `/mockups/script-reviewer`,
  `/mockups/lora-creation`, `/mockups/image-reviewer`, `/mockups/human-review`, `/mockups/scene-generation`,
  `/mockups/quality-supervisor`, `/mockups/chapter-output` — the internal admin mockup, for screenshotting

## Notes

- Contact email/phone on the home page are still placeholders — fill in your real ones in `src/pages/Home.jsx`.
- The light/dark toggle (top of the mockup sidebar) only affects the `/mockups/*` screens; the portfolio site
  itself is intentionally dark-only, matching the original design.
- Node positions on the Pipeline screen are remembered per-browser (`localStorage`); use "Reset layout" to
  go back to the default arrangement.
