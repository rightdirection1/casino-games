import { useLanguage } from "@/context/LanguageCtx";

export const useNavbar = () => {
  const { lang, changeLanguage, translations } = useLanguage();

  const toggleLanguage = () => {
    changeLanguage(lang === "en" ? "bg" : "en");
  };

  const currentLangLabel = lang === "en" ? "EN" : "BG";
  const brandTitle =
    translations?.brandTitle || translations?.footer_brand || "Casino Games";

  return {
    lang,
    toggleLanguage,
    currentLangLabel,
    brandTitle,
  };
};
