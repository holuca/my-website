import { useLanguage } from "../i18n/LanguageContext";
import "./Footer.css";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-title">{t.footer.title}</div>
          <div className="footer-muted">{t.footer.subtitle}</div>
        </div>

        <div className="footer-links">
          <a href={`mailto:${t.footer.email}`}>{t.footer.email}</a>
          <a href={t.footer.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={t.footer.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
