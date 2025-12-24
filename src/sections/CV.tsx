import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import "./CV.css";

type CVItem = {
  title: string;
  org: string;
  time: string;
  desc: string;
  details?: string[] | string;
};

export default function CV() {
  const { t } = useLanguage();

  // Create stable keys to track open/close
  const eduItems = t.cv.eduItems as readonly CVItem[];
  const workItems = t.cv.workItems as readonly CVItem[];

  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  const renderItem = (x: CVItem, key: string, colorClass: "cv-edu" | "cv-work") => {
    const isOpen = openKey === key;
    const hasDetails = Boolean(x.details);

    return (
      <li key={key} className={`cv-item ${isOpen ? "open" : ""}`}>
        <div className="cv-item-top">
          <strong>{x.title}</strong>
          <span className="cv-time">{x.time}</span>
        </div>

        <div className="cv-org">{x.org}</div>
        <div className="cv-org">{x.skills}</div>
        {/* Clickable description row (no visible button) */}
        <div
          className={`cv-descRow ${hasDetails ? "clickable" : ""}`}
          role={hasDetails ? "button" : undefined}
          tabIndex={hasDetails ? 0 : -1}
          onClick={hasDetails ? () => toggle(key) : undefined}
          onKeyDown={
            hasDetails
              ? (e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle(key);
                  }
                }
              : undefined
          }
          aria-expanded={hasDetails ? isOpen : undefined}
        >
          <span className="cv-desc">{x.desc}</span>
          {hasDetails && <span className={`cv-caret ${isOpen ? "open" : ""}`}>›</span>}
        </div>

        {/* Expanded details */}
        {hasDetails && isOpen && (
          <div className="cv-details">
            {Array.isArray(x.details) ? (
              <ul className="cv-detailList">
                {x.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            ) : (
              <p className="cv-detailText">{x.details}</p>
            )}
          </div>
        )}
      </li>
    );
  };

  return (
    <div className="cv">
      <div className="cv-block cv-edu">
        <h3 className="cv-heading">{t.cv.education}</h3>
        <ul className="cv-list">
          {eduItems.map((x) => renderItem(x, `edu:${x.title}:${x.time}`, "cv-edu"))}
        </ul>
      </div>

      <div className="cv-block cv-work">
        <h3 className="cv-heading">{t.cv.work}</h3>
        <ul className="cv-list">
          {workItems.map((x) => renderItem(x, `work:${x.title}:${x.time}`, "cv-work"))}
        </ul>
      </div>
    </div>
  );
}
