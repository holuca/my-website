import { useLanguage } from "../i18n/LanguageContext";
import "./CV.css";

export default function CV() {
  const { t } = useLanguage();

  return (
    <div className="cv">
      <div className="cv-block cv-edu">
        <h3 className="cv-heading">{t.cv.education}</h3>
        <ul className="cv-list">
          {t.cv.eduItems.map((x) => (
            <li key={x.title} className="cv-item">
              <div className="cv-item-top">
                <strong>{x.title}</strong>
                <span className="cv-time">{x.time}</span>
              </div>
              <div className="cv-org">{x.org}</div>
              <div className="cv-desc">{x.desc}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="cv-block cv-work">
        <h3 className="cv-heading">{t.cv.work}</h3>
        <ul className="cv-list">
          {t.cv.workItems.map((x) => (
            <li key={x.title} className="cv-item">
              <div className="cv-item-top">
                <strong>{x.title}</strong>
                <span className="cv-time">{x.time}</span>
              </div>
              <div className="cv-org">{x.org}</div>
              <div className="cv-desc">{x.desc}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
