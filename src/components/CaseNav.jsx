import { Link } from "react-router-dom";

export default function CaseNav({ label }) {
  return (
    <nav>
      <div className="wrap-wide">
        <Link className="back-link" to="/">← Portfolio</Link>
        <ul className="nav-links">
          <li className="mono" style={{ color: "var(--ink-faint)" }}>{label}</li>
        </ul>
      </div>
    </nav>
  );
}
