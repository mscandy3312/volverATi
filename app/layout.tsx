import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Volver a Ti | Webinar Gratuito con MaryCarmen",
  description: "Cómo recuperar claridad, poder personal y dirección cuando la vida cambia. Descubre cómo la IA puede ser tu copiloto consciente.",
  keywords: ["Volver a ti", "Webinar gratuito", "MaryCarmen", "Claridad mental", "Poder personal", "IA consciente"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#F6F4ED] text-[#3A4235] font-sans antialiased selection:bg-[#6B7A65] selection:text-white">
        {children}
      </body>
    </html>
  );
}
