import { useState } from "react";

export default function CapabilityGrid({ items }) {
  const [activeIdx, setActiveIdx] = useState(null);
  const clear = () => setActiveIdx(null);

  return (
    <div className="cap-grid">
      {items.map((it, i) => (
        <div
          className={"cap-cell" + (activeIdx === i ? " is-active" : "")}
          key={it.title}
          onTouchStart={() => setActiveIdx(i)}
          onTouchEnd={clear}
          onTouchCancel={clear}
        >
          <span className="cap-glow" aria-hidden="true" />
          <span className="cap-icon">{it.icon}</span>
          <span className="cap-num mono">{String(i + 1).padStart(2, "0")}</span>
          <span className="cap-title">{it.title}</span>
        </div>
      ))}
    </div>
  );
}
