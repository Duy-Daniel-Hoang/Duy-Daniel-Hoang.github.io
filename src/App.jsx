import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import PortfolioLayout from "./layout/PortfolioLayout.jsx";
import Home from "./pages/Home.jsx";
// Not lazy: these 3 routes are prerendered to their own static HTML at
// build time, so hydration needs their markup available immediately —
// lazy-loading them caused a hydration mismatch (the saved static HTML
// already has resolved content, but the client starts from an unresolved
// Suspense state), forcing React to discard and re-render from scratch,
// which showed up as a visible flash on first load.
import Flickrz from "./pages/projects/Flickrz.jsx";
import DrawMind from "./pages/projects/DrawMind.jsx";
import TryNectar from "./pages/projects/TryNectar.jsx";

// The internal AI Webtoon admin mockup (/mockups/*) and its screenshots are
// dev-only — excluded from the public repo (see .gitignore) and from
// production builds. The dynamic path below is intentionally not statically
// analyzable so Vite never tries to resolve/bundle these files in prod.
const mockup = (file) => lazy(() => import(/* @vite-ignore */ `./mockups/${file}`));

const AdminLayout = mockup("layout/AdminLayout.jsx");
const Pipeline = mockup("pages/Pipeline.jsx");
const ChapterBrief = mockup("pages/ChapterBrief.jsx");
const ScriptWriter = mockup("pages/ScriptWriter.jsx");
const ScriptReviewer = mockup("pages/ScriptReviewer.jsx");
const LoraCreation = mockup("pages/LoraCreation.jsx");
const ImageReviewer = mockup("pages/ImageReviewer.jsx");
const HumanReview = mockup("pages/HumanReview.jsx");
const SceneGeneration = mockup("pages/SceneGeneration.jsx");
const QualitySupervisor = mockup("pages/QualitySupervisor.jsx");
const ChapterOutput = mockup("pages/ChapterOutput.jsx");
const DrawMindDetect = mockup("pages/DrawMindDetect.jsx");
const DrawMindChat = mockup("pages/DrawMindChat.jsx");

export default function App() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", background: "var(--bg)" }} />}>
      <Routes>
        <Route element={<PortfolioLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/flickrz" element={<Flickrz />} />
          <Route path="/projects/drawmind" element={<DrawMind />} />
          <Route path="/projects/trynectar" element={<TryNectar />} />
        </Route>

        {import.meta.env.DEV && (
          <>
            <Route path="/mockups" element={<AdminLayout />}>
              <Route index element={<Navigate to="pipeline" replace />} />
              <Route path="pipeline" element={<Pipeline />} />
              <Route path="chapter-brief" element={<ChapterBrief />} />
              <Route path="script-writer" element={<ScriptWriter />} />
              <Route path="script-reviewer" element={<ScriptReviewer />} />
              <Route path="lora-creation" element={<LoraCreation />} />
              <Route path="image-reviewer" element={<ImageReviewer />} />
              <Route path="human-review" element={<HumanReview />} />
              <Route path="scene-generation" element={<SceneGeneration />} />
              <Route path="quality-supervisor" element={<QualitySupervisor />} />
              <Route path="chapter-output" element={<ChapterOutput />} />
            </Route>
            <Route path="/mockups/drawmind-detect" element={<DrawMindDetect />} />
            <Route path="/mockups/drawmind-chat" element={<DrawMindChat />} />
            <Route path="/mockups/drawmind-detect-ig" element={<DrawMindDetect variant="ig" />} />
            <Route path="/mockups/drawmind-chat-ig" element={<DrawMindChat variant="ig" />} />
          </>
        )}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
