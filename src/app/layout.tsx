import type { Metadata } from "next";
import { Cinzel, Manrope } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Moth Piercing | Ritualize seu Estilo",
  description: "Joalheria exclusiva em Titânio G23.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body className={`${cinzel.variable} ${manrope.variable} font-body bg-background text-on-background`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}