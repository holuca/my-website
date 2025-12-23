import "./App.css";
import Header from "../components/Header/Header";
import { useLanguage } from "../i18n/LanguageContext";
import { Section } from "../components/Section/Section";
import About from "../sections/About";
import Projects from "../sections/Projects";
import CV from "../sections/CV";
import Footer from "../sections/Footer";

export default function App() {
  const { t } = useLanguage();

  return (
    <>
      <Header />

      <main>
        <Section id="about" title={t.nav.about}>
          <About/>
        </Section>

        <Section id="projects" title={t.nav.projects}>
          <Projects />
        </Section>


        <Section id="cv" title={t.nav.cv}>
          <CV />
        </Section>

        <Footer/>
      </main>
    </>
  );
}