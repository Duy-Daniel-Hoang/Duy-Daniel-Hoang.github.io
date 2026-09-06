export default function SkillBars({ items, max }) {
  return (
    <div>
      {items.map(([name, yrs]) => (
        <div className="skill-row-wrap" key={name}>
          <div className="skill-row">
            <div className="skill-name">{name}</div>
            <div className="skill-yrs">{yrs}y</div>
          </div>
          <div className="skill-bar-track">
            <div className="skill-bar-fill" style={{ width: `${Math.round((yrs / max) * 100)}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}
