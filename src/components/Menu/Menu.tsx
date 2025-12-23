import "./Menu.css";
import { useLanguage } from "../../i18n/LanguageContext";
type Props = {
  open: boolean;
  onClose: () => void;
};



export default function Menu({ open, onClose }: Props) {

  const {t, lang, setLang} = useLanguage();
    const items = [
    { id: "about", label: t.nav.about },
    { id: "projects", label: t.nav.projects },
    { id: "cv", label: t.nav.cv },
    { id: "contact", label: t.nav.contact },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    onClose();
  };


  return (
    <>
      <div className={`menu-overlay ${open ? "open" : ""}`} onClick={onClose} />

      <div className={`menu ${open ? "open" : ""}`}>
        <div className="menu-content">
          <nav className="menu-nav">
            {items.map((it) => (
              <button
                key={it.id}
                className="menu-link"
                onClick={() => scrollTo(it.id)}
              >
                {it.label}
              </button>
            ))}
          </nav>
          
          <div className="menu-bottom">
            <div className="menu-label">{t.nav.language}</div>
            <div className="menu-lang">
              <button
                className={`pill ${lang === "en" ? "active" : ""}`}
                onClick={() => setLang("en")}
              >
                EN
              </button>
              <button
                className={`pill ${lang === "de" ? "active" : ""}`}
                onClick={() => setLang("de")}
              >
                DE
              </button>
            </div>
          </div>
        </div>
</div>

    </>
  );
}
