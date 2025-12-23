import "./Menu.css";
import { useLanguage } from "../../i18n/LanguageContext";
type Props = {
  open: boolean;
  onClose: () => void;
};

const items = [
  { id: "about", key: "about" },
  { id: "projects", key: "projects" },
  { id: "cv", key: "cv" },
  { id: "contact", key: "contact" },
] as const;


export default function Menu({ open, onClose }: Props) {

  const {t, lang, setLang} = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    onClose();
  };


  return (
    <>
      <div className={`menu-overlay ${open ? "open" : ""}`} onClick={onClose} />

      <div className={`menu ${open ? "open" : ""}`}>
        <div>
          {items.map((it) => (
            <button
              key={it.id}
              className="menu-link"
              onClick={() => scrollTo(it.id)}
            >
              {t.nav[it.key]}
            </button>
          ))}
        </div>

         <div className="menu-bottom">
          <div className="menu-label">{t.nav.language}</div>

          <div className="menu-lang">
            <button
              className={`pill ${lang === "en" ? "active" : ""}`}
              onClick={() => {setLang("en"); onClose();}}
            >
              EN
            </button>
            <button
              className={`pill ${lang === "de" ? "active" : ""}`}
              onClick={() => {setLang("de"); onClose();}}
            >
              DE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
