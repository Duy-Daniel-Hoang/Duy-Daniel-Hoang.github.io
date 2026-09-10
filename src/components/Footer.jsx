import { useLocale } from "../i18n/LocaleContext.jsx";

export default function Footer() {
  const { t } = useLocale();
  return (
    <footer>
      <div className="wrap">
        <div className="footer-row">
          <span>{t("identity.name")} — {t("footer.role")}</span>
          <span>{t("footer.location")}</span>
        </div>
      </div>
    </footer>
  );
}
