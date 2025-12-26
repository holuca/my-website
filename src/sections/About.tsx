
import { useLanguage } from "../i18n/LanguageContext";
import me from "/about/profile.jpg"
import "./About.css";

export default function About(){
    const {t} = useLanguage();

    return(
        <div className="about">
            <img className="about-photo" src={me} alt="Portrait"/> 
            <div>
                <h1 className="about-name">{t.sections.aboutTitle}</h1>
                <p className="about-text">{t.sections.aboutText} </p>
            </div>

        </div>

    );

};