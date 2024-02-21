import "./globals.css";
import { Inter } from "next/font/google";

const mainFont = Inter({
  subsets: ["latin"],
  weight: ["300"],
});

export const metadata = {
  title: "Fantacalcio - Argentina",
  description: "El famoso y emocionante juego de fútbol adaptado a la liga Argentina para compartir con amigos",
};

export const viewport = {
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content={viewport.viewport} />
        <meta name="robots" content="index, follow" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body className={mainFont.className}>{children}</body>
    </html>
  );
}
