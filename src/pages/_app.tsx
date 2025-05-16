import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageCtx";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow px-4 py-8 bg-gray-50">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
