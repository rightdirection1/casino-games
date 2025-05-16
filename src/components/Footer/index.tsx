// components/Footer/index.tsx
import { useFooter } from "./useFooter";

export const Footer = () => {
  const { translations, currentYear, fallbackText } = useFooter();

  if (!translations) return <div>Loading translations...</div>;

  return (
    <footer className="sticky w-full bg-gray-700 text-white text-center py-4 mt-16">
      <div className="border-t-4 border-gradient-to-r from-pink-500 via-purple-500 to-red-500" />

      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-2">
              {translations.brandName || fallbackText.brandName}
            </h3>
            <p className="text-sm text-gray-400">
              {translations.footerDescription || fallbackText.footerDescription}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">
              {translations.quickLinks || fallbackText.quickLinks}
            </h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline text-gray-300">
                  {translations.home || fallbackText.home}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-300">
                  {translations.privacyPolicy || fallbackText.privacyPolicy}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-gray-300">
                  {translations.terms || fallbackText.terms}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">
              {translations.followUs || fallbackText.followUs}
            </h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-300 hover:text-pink-500">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-500">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-500">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-600 pt-4 text-xs text-gray-400">
          &copy; {currentYear}{" "}
          {translations.brandName || fallbackText.brandName}.{" "}
          {translations.allRightsReserved || fallbackText.allRightsReserved}
        </div>
      </div>
    </footer>
  );
};
