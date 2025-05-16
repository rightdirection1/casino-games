// components/Navbar/index.tsx
import { useNavbar } from "./useNavbar";

export const Navbar = () => {
  const { toggleLanguage, currentLangLabel, brandTitle } = useNavbar();

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">{brandTitle}</div>

          <div>
            <button
              onClick={toggleLanguage}
              className="text-sm text-gray-300 hover:text-white transition"
            >
              {currentLangLabel}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
