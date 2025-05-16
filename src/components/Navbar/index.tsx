// components/Navbar/index.tsx
import { useNavbar } from "../../hooks/useNavbar";
import Image from "next/image";

export const Navbar = () => {
  const { toggleLanguage, currentLangLabel, brandTitle } = useNavbar();

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-800 text-white fixed top-0 left-0 w-full z-50 shadow-xl border-b-2 border-pink-500/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold flex items-center space-x-3">
            <Image
              src="/navbar-logo.svg"
              alt="Casino Logo"
              className="h-12 w-12 sm:h-14 sm:w-14 object-contain drop-shadow-md"
              width={56}
              height={56}
              priority
            />
            <span className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 bg-clip-text text-transparent align-middle drop-shadow-lg">
              {brandTitle}
            </span>
          </div>

          <div>
            <button
              onClick={toggleLanguage}
              className="px-3 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 text-white font-semibold shadow-lg border-2 border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 flex items-center justify-center gap-2 transition-all duration-200 hover:brightness-110 active:brightness-95 text-sm sm:text-base md:text-lg tracking-wide select-none min-w-[80px] sm:min-w-[110px] md:min-w-[130px] w-auto"
              aria-label="Change language"
              style={{ transition: "none" }}
            >
              <span className="flex items-center justify-center w-full">
                <span className="w-full text-center whitespace-nowrap overflow-hidden text-ellipsis">
                  {currentLangLabel}
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
