import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { translations, type Language } from "../i18n/translations";

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (path: string) => any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Busca un valor dentro del diccionario usando una ruta tipo "nav.home"
function getValueFromPath(obj: any, path: string) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    if (saved === "es" || saved === "en") return saved;

    // Si no hay nada guardado, usa el idioma del navegador como default
    const browserLang = navigator.language.startsWith("es") ? "es" : "en";
    return browserLang;
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const t = (path: string) => {
    const value = getValueFromPath(translations[language], path);
    if (value === undefined) {
      console.warn(`Falta traducción para: "${path}"`);
      return path;
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
  }
  return context;
}