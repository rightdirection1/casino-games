# Casino Games

A modern, responsive casino slot games web app built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Multilingual support (English & Bulgarian)
- Beautiful, responsive UI with custom navbar and footer
- Virtualized and styled game grid
- Language switcher
- Accessibility and performance best practices

## Prerequisites

- Node.js (v18 or newer recommended)
- npm (v9 or newer recommended)

## Getting Started

1. **Install dependencies:**

   ```powershell
   npm install
   ```

2. **Run the development server:**

   ```powershell
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production:**

   ```powershell
   npm run build
   npm start
   ```

4. **Static export (optional):**
   ```powershell
   npm run build && npm run export
   ```
   The static site will be in the `out/` directory.

## Project Structure

- `src/pages/` – Next.js pages
- `src/components/` – UI components (Navbar, Footer, GameGrid, etc.)
- `src/context/` – React context for language
- `src/hooks/` – Custom React hooks
- `public/locales/` – Translation files
- `public/` – Static assets (favicons, logo, etc.)

## Customization

- Edit translations in `public/locales/en/common.json` and `public/locales/bg/common.json`
- Update branding in `public/navbar-logo.svg` and `public/favicon.svg`

## License

MIT
