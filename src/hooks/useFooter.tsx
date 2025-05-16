// components/Footer/useFooter.ts
import { useLanguage } from "@/context/LanguageCtx";

export const useFooter = () => {
  const { translations } = useLanguage();

  return {
    translations,
    currentYear: new Date().getFullYear(),
    fallbackText: {
      brandName: "Casino Games",
      footerDescription: "Enjoy top slot games from your favorite providers.",
      quickLinks: "Quick Links",
      home: "Home",
      privacyPolicy: "Privacy Policy",
      terms: "Terms of Service",
      followUs: "Follow Us",
      allRightsReserved: "All rights reserved.",
    },
  };
};
