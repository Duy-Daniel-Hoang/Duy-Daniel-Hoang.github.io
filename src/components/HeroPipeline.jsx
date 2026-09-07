import { useEffect, useRef } from "react";

// Hotspots over /assets/thumbnail-home.jpg (1280x853), one per pipeline stage.
// Coordinates measured directly against the source image.
const HOTSPOTS = [
  { label: "Data", x: 133, y: 114, w: 219, h: 177 },
  { label: "Preprocessing", x: 378, y: 111, w: 151, h: 187 },
  { label: "Training", x: 549, y: 105, w: 144, h: 191 },
  { label: "Deployment", x: 713, y: 109, w: 132, h: 192 },
  { label: "LLMOps", x: 866, y: 101, w: 161, h: 232 },
  { label: "Application", x: 1044, y: 113, w: 130, h: 217 },
];
const IMG_W = 1280;
const IMG_H = 853;
const STEP_MS = 1100;

// Size step by rank distance from the active box (rank 1 = active itself,
// rank 2 = one slot away, etc.) — a fixed, discrete scale per tier, no
// continuous interpolation between them.
const SCALE_BY_RANK = [1.32, 1.12, 1.03, 1.0, 1.0, 1.0];

export default function HeroPipeline() {
  const boxRefs = useRef([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let activeIdx = 0;

    const applyStep = () => {
      boxRefs.current.forEach((el, i) => {
        if (!el) return;
        const rank = Math.abs(activeIdx - i); // 0 = active box itself
        el.style.transform = `scale(${SCALE_BY_RANK[rank]})`;
        el.classList.toggle("is-active", i === activeIdx);
      });
    };

    applyStep();
    const id = setInterval(() => {
      activeIdx = (activeIdx + 1) % HOTSPOTS.length;
      applyStep();
    }, STEP_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero-image-wrap">
      <img
        className="hero-image"
        src="/assets/thumbnail-home.jpg"
        alt="Multimodal AI agent — data, training, deployment, LLMOps, application"
        loading="lazy"
        decoding="async"
      />
      {HOTSPOTS.map((box, i) => (
        <span
          key={box.label}
          ref={(el) => (boxRefs.current[i] = el)}
          className="hero-hotspot"
          aria-hidden="true"
          style={{
            left: `${(box.x / IMG_W) * 100}%`,
            top: `${(box.y / IMG_H) * 100}%`,
            width: `${(box.w / IMG_W) * 100}%`,
            height: `${(box.h / IMG_H) * 100}%`,
            backgroundImage: "url(/assets/thumbnail-home.jpg)",
            backgroundSize: `${(IMG_W / box.w) * 100}% ${(IMG_H / box.h) * 100}%`,
            backgroundPosition: `${(box.x / (IMG_W - box.w)) * 100}% ${(box.y / (IMG_H - box.h)) * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
