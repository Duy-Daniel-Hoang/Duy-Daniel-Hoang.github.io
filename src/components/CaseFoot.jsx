import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";

export default function CaseFoot({ others }) {
  return (
    <>
      <div className="wrap case-nav-foot">
        <Link className="btn" to="/">← Back to portfolio</Link>
        <div className="other-cases">
          {others.map((o) => (
            <Link className="btn" to={o.to} key={o.to}>
              {o.label} →
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
