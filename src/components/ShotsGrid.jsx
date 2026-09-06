import { useState } from "react";

export default function ShotsGrid({ shots }) {
  const [activeIdx, setActiveIdx] = useState(null);
  const clear = () => setActiveIdx(null);

  return (
    <div className="shots-grid">
      {shots.map((s, i) => (
        <div className="shot-card" key={s.file}>
          <div
            className={"shot-frame" + (activeIdx === i ? " is-active" : "")}
            data-hint={`drop ${s.file} here`}
            onTouchStart={() => setActiveIdx(i)}
            onTouchEnd={clear}
            onTouchCancel={clear}
          >
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
      ))}
    </div>
  );
}
