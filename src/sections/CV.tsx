import { useMemo, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import "./CV.css";

type Kind = "edu" | "work";

type CVItem = {
  id: string;               // <-- add stable id
  kind: Kind;               // <-- edu/work
  title: string;
  org: string;
  skills: string;
  start: string;            // "YYYY-MM"
  end: string | null;       // null = ongoing
  time: string;             // display string
  desc: string;
  details?: string[] | string;
};

type SortMode = "type" | "time";

function parseYYYYMM(v: string | null | undefined) {
  if (!v) return -Infinity;
  const [y, m] = v.split("-").map(Number);
  if (!y) return -Infinity;
  return y * 12 + (m ? m - 1 : 0);
}

export default function CV() {
  const { t } = useLanguage();
  const [mode, setMode] = useState<SortMode>("type");
  const [openKey, setOpenKey] = useState<string | null>(null);

  // If your LanguageContext typing isn't strict, this avoids the readonly-cast pain.
  // Once your i18n types are strict, you can remove the `as unknown as`.
  const eduItems = (t.cv.eduItems ?? []) as unknown as CVItem[];
  const workItems = (t.cv.workItems ?? []) as unknown as CVItem[];

  const toggle = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  const timelineItems = useMemo(() => {
    const all = [...eduItems, ...workItems];

    // Sort: ongoing first, then most recent end/start
    return all.sort((a, b) => {
      const aEnd = a.end ? parseYYYYMM(a.end) : Infinity;
      const bEnd = b.end ? parseYYYYMM(b.end) : Infinity;
      if (bEnd !== aEnd) return bEnd - aEnd;

      const aStart = parseYYYYMM(a.start);
      const bStart = parseYYYYMM(b.start);
      return bStart - aStart;
    });
  }, [eduItems, workItems]);

  const renderItem = (x: CVItem) => {
    const key = x.id;
    const isOpen = openKey === key;
    const hasDetails = Boolean(x.details);

    return (
      <li key={key} className={`cv-item ${x.kind} ${isOpen ? "open" : ""}`}>
        <div className="cv-item-top">
          <div className="cv-titleRow">
            <strong className="cv-title">{x.title}</strong>
            <span className={`cv-badge ${x.kind}`}>
              {x.kind === "edu" ? t.cv.education : t.cv.work}
            </span>
          </div>
          <span className="cv-time">{x.time}</span>
        </div>

        <div className="cv-org">{x.org}</div>
        <div className="cv-skills">{x.skills}</div>

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
        
          {hasDetails && (
            <span className={`cv-caret ${isOpen ? "open" : ""}`} aria-hidden>
              ▾
            </span>
          )}
        </div>


        {hasDetails && (
          <div className={`cv-expand ${isOpen ? "open" : ""}`}>
            <div className="cv-expandInner">
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
          </div>
        )}

      </li>
    );
  };

  return (
    <div className="cv">
      {/* pills right-aligned */}
      <div className="cv-header">
        <div className="cv-toolbar" role="tablist" aria-label="CV sorting">
          <button
            className={`cv-pill ${mode === "type" ? "active" : ""}`}
            onClick={() => setMode("type")}
            type="button"
          >
            {t.cv.sortType}
          </button>
          <button
            className={`cv-pill ${mode === "time" ? "active" : ""}`}
            onClick={() => setMode("time")}
            type="button"
          >
            {t.cv.sortTime}
          </button>
        </div>
      </div>

      {mode === "type" ? (
        <div className="cv-grid">
          <div className="cv-block">
            <div className="cv-blockTitle">{t.cv.education}</div>
            <ul className="cv-list">{eduItems.map(renderItem)}</ul>
          </div>

          <div className="cv-block">
            <div className="cv-blockTitle">{t.cv.work}</div>
            <ul className="cv-list">{workItems.map(renderItem)}</ul>
          </div>
        </div>
      ) : (
        <div className="cv-block">
          <ul className="cv-list">{timelineItems.map(renderItem)}</ul>
        </div>
      )}
    </div>
  );
}
