// src/context/LanguageContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode, FunctionComponent } from "react";

// Context value shape
interface LanguageContextProps {
  lang: string;
  translations: Record<string, string> | null;
  changeLanguage: (lang: string) => void;
}

// Create context (with undefined default)
const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

// Props for the provider component
interface LanguageProviderProps {
  children: ReactNode;
}

// LanguageProvider component
export const LanguageProvider: FunctionComponent<LanguageProviderProps> = ({
  children,
}) => {
  const [lang, setLang] = useState("en");
  const [translations, setTranslations] = useState<Record<
    string,
    string
  > | null>(null);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    const cached = localStorage.getItem(`translations-${savedLang}`);

    if (cached) {
      setTranslations(JSON.parse(cached));
      setLang(savedLang);
    } else {
      fetchTranslations(savedLang);
    }
  }, []);

  const fetchTranslations = async (language: string) => {
    try {
      const res = await fetch(`/locales/${language}/common.json`);
      const data = await res.json();
      setTranslations(data);
      setLang(language);
      localStorage.setItem(`translations-${language}`, JSON.stringify(data));
      localStorage.setItem("lang", language);
    } catch (err) {
      console.error("Translation fetch failed:", err);
    }
  };

  const changeLanguage = (newLang: string) => {
    fetchTranslations(newLang);
  };

  // Wrap everything inside LanguageContext.Provider
  return (
    <LanguageContext.Provider value={{ lang, translations, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
