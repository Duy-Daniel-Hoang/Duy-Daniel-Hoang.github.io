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
const LOOP_MS = 16000;

const centers = HOTSPOTS.map((b) => ((b.x + b.w / 2) / IMG_W) * 100);

export default function HeroPipeline() {
  const scannerRef = useRef(null);
  const boxRefs = useRef([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let raf;
    let activeIdx = -1;
    const tick = (t) => {
      const progress = (t % LOOP_MS) / LOOP_MS; // 0..1
      const scannerPos = progress * 100; // 0..100% across image width
      if (scannerRef.current) scannerRef.current.style.left = `${scannerPos}%`;

      // Only one box is ever "active" at a time — a plain discrete switch,
      // not a continuously-recomputed scale, keeps the text inside crisp
      // instead of smearing across many in-between sizes.
      let nearest = 0;
      let minDist = Infinity;
      centers.forEach((c, i) => {
        const d = Math.abs(scannerPos - c);
        if (d < minDist) {
          minDist = d;
          nearest = i;
        }
      });

      if (nearest !== activeIdx) {
        boxRefs.current.forEach((el, i) => {
          if (el) el.classList.toggle("is-active", i === nearest);
        });
        activeIdx = nearest;
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
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
      <span ref={scannerRef} className="hero-scanner" aria-hidden="true" />
    </div>
  );
}
