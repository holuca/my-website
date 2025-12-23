import { useLanguage } from "../i18n/LanguageContext";
import "./Projects.css";

type Project = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

export default function Projects() {
  const { t } = useLanguage();

  // Tell TS exactly what shape these items should have:
  const projects = t.projects.items as readonly Project[];

  return (
    <div className="projects-grid">
      {projects.map((p) => (
        <article key={p.title} className="project-card">
          <div className="project-thumb">
            <img src={p.image} alt={p.title} />
          </div>

          <div className="project-body">
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.description}</p>

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
      ))}
    </div>
  );
}
