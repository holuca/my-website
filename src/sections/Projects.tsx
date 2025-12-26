import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import "./Projects.css";
import ReactMarkdown from "react-markdown";

type Project = {
  title: string;
  description: string;
  abstract: string;
  abstractLabel: string;
  image: string;
  link?: string;
};

export default function Projects() {
  const { t } = useLanguage();
  const projects = t.projects.items as readonly Project[];

  // only one project expanded at a time
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  return (
    <div className="projects-grid">
      {projects.map((p) => {
        const key = p.title; // stable enough here
        const isOpen = openKey === key;

        return (
          <article key={key} className="project-card">
            <div className="project-thumb">
              <img src={p.image} alt={p.title} loading="lazy" />
            </div>

            <div className="project-body">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>

              {/* expandable button */}
              <div
                className={`project-abstractRow ${isOpen ? "open" : ""}`}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onClick={() => toggle(key)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle(key);
                  }
                }}
              >
                <span className="project-abstractLabel">
                  {p.abstractLabel}
                </span>
              </div>

              {/* expandable content */}
              <div className={`project-expand ${isOpen ? "open" : ""}`}>
                <ReactMarkdown
                  components={{
                    p: ({ node, ...props }) => (
                      <p {...props} className="project-abstractText" />
                    ),
                    a: ({ node, ...props }) => (
                      <a
                        {...props}
                        target="_blank"
                        rel="noreferrer"
                        className="project-inlineLink"
                      />
                    ),
                  }}
                >
                  {p.abstract}
                </ReactMarkdown>

                
              </div>

              {p.link && (
                <a
                  className="project-link"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.projects.view}
                </a>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
