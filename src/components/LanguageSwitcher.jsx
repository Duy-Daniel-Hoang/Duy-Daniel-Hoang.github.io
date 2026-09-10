import { useEffect, useRef, useState } from "react";
import { LOCALES, useLocale } from "../i18n/LocaleContext.jsx";

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const activeLocale = LOCALES.find(({ code }) => code === locale) ?? LOCALES[0];

  useEffect(() => {
    if (!open) return undefined;
    const closeOnOutsideClick = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        rootRef.current?.querySelector("button")?.focus();
      }
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const chooseLocale = (code) => {
    setLocale(code);
    setOpen(false);
  };

  return (
    <div className="language-switcher" ref={rootRef}>
      <button type="button" className="language-trigger" aria-label={t("ui.language")} aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        <span className="language-globe" aria-hidden="true">◎</span>
        <span lang={activeLocale.code}>{activeLocale.label}</span>
        <span className="language-chevron" aria-hidden="true">⌄</span>
      </button>
      {open && (
        <div className="language-menu" role="listbox" aria-label={t("ui.language")}>
          {LOCALES.map(({ code, label, name }) => (
            <button type="button" className={code === locale ? "is-active" : ""} role="option" aria-selected={code === locale} onClick={() => chooseLocale(code)} key={code} lang={code}>
              <span className="language-code">{label}</span>
              <span className="language-name">{name}</span>
              <span className="language-check" aria-hidden="true">{code === locale ? "✓" : ""}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
