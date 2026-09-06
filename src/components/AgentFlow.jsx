import { useState } from "react";

export default function AgentFlow({ steps }) {
  const [activeIdx, setActiveIdx] = useState(null);
  const clear = () => setActiveIdx(null);

  return (
    <div className="agent-flow">
      {steps.map((s, i) => (
        <div
          className={"agent-step" + (s.gate ? " gate" : "") + (activeIdx === i ? " is-active" : "")}
          key={s.idx}
          onTouchStart={() => setActiveIdx(i)}
          onTouchEnd={clear}
          onTouchCancel={clear}
        >
          <div className="agent-dot mono">{s.idx}</div>
          <div>
            <div className="agent-name">
              {s.name} {s.tag && <span>{s.tag}</span>}
            </div>
            <div className="agent-desc">{s.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
