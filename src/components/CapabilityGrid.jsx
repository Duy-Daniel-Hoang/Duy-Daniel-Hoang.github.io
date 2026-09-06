export default function CapabilityGrid({ items }) {
  return (
    <div className="cap-grid">
      {items.map((it, i) => (
        <div className="cap-cell" key={it.title}>
          <span className="cap-glow" aria-hidden="true" />
          <span className="cap-icon">{it.icon}</span>
          <span className="cap-num mono">{String(i + 1).padStart(2, "0")}</span>
          <span className="cap-title">{it.title}</span>
        </div>
      ))}
    </div>
  );
}
