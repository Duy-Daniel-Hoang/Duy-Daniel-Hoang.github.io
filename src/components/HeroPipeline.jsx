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
  const wrapRef = useRef(null);
  const boxRefs = useRef([]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let activeIdx = 0;
    let intervalId = null;
    let inView = false;

    const applyStep = () => {
      boxRefs.current.forEach((el, i) => {
        if (!el) return;
        const rank = Math.abs(activeIdx - i);
        el.style.transform = `scale(${SCALE_BY_RANK[rank]})`;
        el.classList.toggle("is-active", i === activeIdx);
      });
    };

    const reset = () => {
      boxRefs.current.forEach((el) => {
        if (!el) return;
        el.style.transform = "";
        el.classList.remove("is-active");
      });
    };

    const stop = () => {
      if (intervalId === null) return;
      clearInterval(intervalId);
      intervalId = null;
    };

    const start = () => {
      if (intervalId !== null || !inView || document.hidden || motionPreference.matches) return;
      intervalId = window.setInterval(() => {
        activeIdx = (activeIdx + 1) % HOTSPOTS.length;
        applyStep();
      }, STEP_MS);
    };

    const onVisibilityChange = () => {
      if (document.hidden) stop();
      else start();
    };
    const onMotionChange = () => {
      if (motionPreference.matches) {
        stop();
        reset();
      } else {
        applyStep();
        start();
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) start();
      else stop();
    }, { threshold: 0.05 });

    if (motionPreference.matches) reset();
    else applyStep();
    if (wrap) observer.observe(wrap);
    document.addEventListener("visibilitychange", onVisibilityChange);
    motionPreference.addEventListener("change", onMotionChange);

    return () => {
      stop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      motionPreference.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <div ref={wrapRef} className="hero-image-wrap hero-image-wrap--pipeline" style={{ aspectRatio: `${IMG_W} / ${IMG_H}` }}>
      <picture className="hero-image-picture">
        <source srcSet="/assets/thumbnail-home.avif" type="image/avif" />
        <img
          className="hero-image"
          src="/assets/thumbnail-home.jpg"
          alt="Multimodal AI agent — data, training, deployment, LLMOps, application"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
      </picture>
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
            backgroundSize: `${(IMG_W / box.w) * 100}% ${(IMG_H / box.h) * 100}%`,
            backgroundPosition: `${(box.x / (IMG_W - box.w)) * 100}% ${(box.y / (IMG_H - box.h)) * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
