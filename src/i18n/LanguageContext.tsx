import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { strings } from "./strings";
import type {Lang} from "./strings";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof strings)[Lang];
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang");
    return (saved === "en" || saved === "de") ? saved : "en";
  });

  const setLang = (l: Lang) => setLangState(l);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const value = useMemo(() => {
    return { lang, setLang, t: strings[lang] };
  }, [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
