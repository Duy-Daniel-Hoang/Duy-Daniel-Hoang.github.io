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
  components/             shared portfolio navigation, diagrams, media, and interactive UI
public/assets/screens/   drop real screenshots here (see the "To fill in" note on the Flickrz case study)
```

## Routes

- `/` — portfolio home
- `/projects/flickrz`, `/projects/drawmind`, `/projects/trynectar` — case studies

## Notes

- Contact email/phone on the home page are still placeholders — fill in your real ones in `src/pages/Home.jsx`.
