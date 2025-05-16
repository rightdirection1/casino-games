// components/Footer/index.tsx
import { useFooter } from "../../hooks/useFooter";
import Image from "next/image";

export const Footer = () => {
  const { translations } = useFooter();

  if (!translations) return <div>Loading translations...</div>;

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-800 text-white pt-8 pb-6 border-t-2 border-pink-500/40 shadow-xl w-full fixed bottom-0 left-0 z-40">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/navbar-logo.svg"
            alt="Casino Logo"
            width={44}
            height={44}
            className="h-11 w-11 drop-shadow-md"
          />
          <span className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
            {translations.footer_brand}
          </span>
        </div>
        <div className="hidden md:block h-8 border-l-2 border-pink-500/30 mx-6" />
        <div className="text-sm text-gray-300 text-center md:text-right mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} {translations.footer_brand}.{" "}
          {translations.footer_copyright}
        </div>
      </div>
    </footer>
  );
};
