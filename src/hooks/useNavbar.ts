import { useLanguage } from "@/context/LanguageCtx";

export const useNavbar = () => {
  const { lang, changeLanguage, translations } = useLanguage();

  const toggleLanguage = () => {
    changeLanguage(lang === "en" ? "bg" : "en");
  };

  const currentLangLabel = lang === "en" ? "EN" : "BG";
  const brandTitle = translations?.brandName || "Casino Games";

  return {
    lang,
    toggleLanguage,
    currentLangLabel,
    brandTitle,
  };
};
