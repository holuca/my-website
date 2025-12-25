import { useMemo, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import "./CV.css";

type CVItem = {
  title: string;
  org: string;
  time: string;
  desc: string;
  skills: string;
  details?: string[] | string;
};

type Kind = "edu" | "work";
type CVItemWithKind = CVItem & { kind: Kind };

type ViewMode = "type" | "time";

export default function CV() {
  const { t } = useLanguage();

  const eduItems = t.cv.eduItems as readonly CVItem[];
  const workItems = t.cv.workItems as readonly CVItem[];

  // open/close state for details
  const [openKey, setOpenKey] = useState<string | null>(null);
  const toggleOpen = (key: string) => setOpenKey((prev) => (prev === key ? null : key));

  // view toggle: "type" (2 columns) vs "time" (1 column sorted)
  const [viewMode, setViewMode] = useState<ViewMode>("type");

  // --- time parsing ---
  // Goal: sort newest -> oldest, treat "present/now" as newest.
  const timeToSortKey = (time: string) => {
    const s = (time || "").toLowerCase();

    // treat "present/now/current/ongoing" as very recent (top)
    // add more words if your translations use different ones
    if (/(present|now|current|ongoing|today|heute|aktuell|bis heute)/i.test(s)) {
      return Number.POSITIVE_INFINITY;
    }

    // Extract all (year, optional month) occurrences.
    // Supports: "2024", "2023-2024", "2023 – 2024", "09/2023 – 02/2024", "2023.09"
    const matches = Array.from(
      s.matchAll(/(?:(\d{1,2})[./-])?(\d{4})/g) // (month)? + year
    );

    if (!matches.length) return Number.NEGATIVE_INFINITY;

    // Use the *last* found date as "end date" for sorting
    const last = matches[matches.length - 1];
    const monthStr = last[1];
    const yearStr = last[2];

    const year = Number(yearStr);
    const month = monthStr ? Number(monthStr) : 12; // if no month, assume end of year

    // create sortable numeric key: YYYYMM
    return year * 100 + Math.max(1, Math.min(12, month));
  };

  const combinedByTime = useMemo(() => {
    const all: CVItemWithKind[] = [
      ...eduItems.map((x) => ({ ...x, kind: "edu" as const })),
      ...workItems.map((x) => ({ ...x, kind: "work" as const })),
    ];

    return all
      .slice()
      .sort((a, b) => timeToSortKey(b.time) - timeToSortKey(a.time));
  }, [eduItems, workItems]);

  const renderItem = (x: CVItemWithKind, key: string) => {
    const isOpen = openKey === key;
    const hasDetails = Boolean(x.details);

    return (
      <li key={key} className={`cv-item ${x.kind} ${isOpen ? "open" : ""}`}>
        <div className="cv-item-top">
          <div className="cv-titleRow">
            <strong className="cv-title">{x.title}</strong>

            {/* little type badge helps in the time-sorted single column view */}
            <span className={`cv-badge ${x.kind}`}>
              {x.kind === "edu" ? t.cv.eduLabel ?? "Education" : t.cv.workLabel ?? "Work"}
            </span>
          </div>

          <span className="cv-time">{x.time}</span>
        </div>

        <div className="cv-org">{x.org}</div>
        <div className="cv-skills">{x.skills}</div>

        {/* Clickable description row (no visible button) */}
        <div
          className={`cv-descRow ${hasDetails ? "clickable" : ""}`}
          role={hasDetails ? "button" : undefined}
          tabIndex={hasDetails ? 0 : -1}
          onClick={hasDetails ? () => toggleOpen(key) : undefined}
          onKeyDown={
            hasDetails
              ? (e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleOpen(key);
                  }
                }
              : undefined
          }
          aria-expanded={hasDetails ? isOpen : undefined}
        >
          <span className="cv-desc">{x.desc}</span>
          {hasDetails && <span className={`cv-caret ${isOpen ? "open" : ""}`}>›</span>}
        </div>

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
    <div className={`cv cv--${viewMode}`}>
      {/* Toggle header */}
      <div className="cv-toolbar" role="group" aria-label="CV view toggle">
        <button
          type="button"
          className={`cv-pill ${viewMode === "type" ? "active" : ""}`}
          onClick={() => setViewMode("type")}
        >
          {t.cv.sortByType ?? "By type"}
        </button>

        <button
          type="button"
          className={`cv-pill ${viewMode === "time" ? "active" : ""}`}
          onClick={() => setViewMode("time")}
        >
          {t.cv.sortByTime ?? "By time"}
        </button>
      </div>

      {/* TYPE VIEW: 2 columns */}
      {viewMode === "type" && (
        <div className="cv-grid">
          <div className="cv-block">
            <h3 className="cv-blockTitle">{t.cv.eduLabel ?? "Education"}</h3>
            <ul className="cv-list">
              {eduItems.map((x) =>
                renderItem({ ...x, kind: "edu" }, `edu:${x.title}:${x.time}`)
              )}
            </ul>
          </div>

          <div className="cv-block">
            <h3 className="cv-blockTitle">{t.cv.workLabel ?? "Work"}</h3>
            <ul className="cv-list">
              {workItems.map((x) =>
                renderItem({ ...x, kind: "work" }, `work:${x.title}:${x.time}`)
              )}
            </ul>
          </div>
        </div>
      )}

      {/* TIME VIEW: 1 long column sorted */}
      {viewMode === "time" && (
        <div className="cv-block">
          <ul className="cv-list">
            {combinedByTime.map((x) =>
              renderItem(x, `${x.kind}:${x.title}:${x.time}`)
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
