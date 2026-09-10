import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";
import { useLocale } from "../i18n/LocaleContext.jsx";

export default function CaseFoot({ others }) {
  const { t } = useLocale();
  return (
    <>
      <div className="wrap case-nav-foot">
        <Link className="btn" to="/">← {t("nav.back")}</Link>
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
