export default function AgentFlow({ steps }) {
  return (
    <div className="agent-flow">
      {steps.map((s) => (
        <div className={"agent-step" + (s.gate ? " gate" : "")} key={s.idx}>
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
