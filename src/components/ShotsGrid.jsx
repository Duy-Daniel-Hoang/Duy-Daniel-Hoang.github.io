import { useEffect, useState } from "react";

function Shot({ s, className = "", ...touchProps }) {
  return (
    <div className="shot-card">
      <div className={"shot-frame " + className} data-hint={`drop ${s.file} here`} {...touchProps}>
        <span className="shot-frame-glow" aria-hidden="true" />
        <img
          src={`/assets/flickrz/${s.file}`}
          alt={s.alt}
          loading="lazy"
          decoding="async"
          onError={(e) => e.currentTarget.parentElement.classList.add("missing")}
        />
      </div>
      <div className="shot-caption">
        <div className="name">{s.name}</div>
        <div className="desc">{s.desc}</div>
      </div>
    </div>
  );
}

export default function ShotsGrid({ shots }) {
  const [activeIdx, setActiveIdx] = useState(null);
  const [slideOpen, setSlideOpen] = useState(false);
  const [slideIdx, setSlideIdx] = useState(0);
  const clear = () => setActiveIdx(null);

  const openSlideshow = (i = 0) => {
    setSlideIdx(i);
    setSlideOpen(true);
  };
  const closeSlideshow = () => setSlideOpen(false);
  const prev = () => setSlideIdx((i) => (i - 1 + shots.length) % shots.length);
  const next = () => setSlideIdx((i) => (i + 1) % shots.length);

  useEffect(() => {
    if (!slideOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") closeSlideshow();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideOpen]);

  const current = shots[slideIdx];

  return (
    <div className="shots-wrap">
      <div className="shots-toggle">
        <button type="button" className={!slideOpen ? "active" : ""} onClick={closeSlideshow}>
          ▦ Grid
        </button>
        <button type="button" className={slideOpen ? "active" : ""} onClick={() => openSlideshow(slideIdx)}>
          ⛶ Slideshow
        </button>
      </div>

      <div className="shots-grid">
        {shots.map((s, i) => (
          <Shot
            s={s}
            key={s.file}
            className={activeIdx === i ? "is-active" : ""}
            onTouchStart={() => setActiveIdx(i)}
            onTouchEnd={clear}
            onTouchCancel={clear}
          />
        ))}
      </div>

      {slideOpen && (
        <div className="shots-lightbox" onClick={closeSlideshow}>
          <button type="button" className="shots-lightbox-close" onClick={closeSlideshow} aria-label="Close slideshow">
            ✕
          </button>
          <button
            type="button"
            className="shots-nav prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous screenshot"
          >
            ‹
          </button>
          <div className="shots-lightbox-body" onClick={(e) => e.stopPropagation()}>
            <img src={`/assets/flickrz/${current.file}`} alt={current.alt} decoding="async" />
            <div className="shots-lightbox-caption">
              <div className="name">{current.name}</div>
              <div className="desc">{current.desc}</div>
              <div className="shots-slide-count mono">
                {slideIdx + 1} / {shots.length}
              </div>
            </div>
          </div>
          <button
            type="button"
            className="shots-nav next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next screenshot"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
