import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import { useLocale } from "../i18n/LocaleContext.jsx";

export default function CaseNav({ label }) {
  const { t } = useLocale();
  return (
    <nav>
      <div className="wrap-wide">
        <Link className="back-link" to="/">← {t("nav.portfolio")}</Link>
        <ul className="nav-links">
          <li className="mono" style={{ color: "var(--ink-faint)" }}>{label}</li>
        </ul>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
