export default function ShotsGrid({ shots }) {
  return (
    <div className="shots-grid">
      {shots.map((s) => (
        <div className="shot-card" key={s.file}>
          <div className="shot-frame" data-hint={`drop ${s.file} here`}>
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
