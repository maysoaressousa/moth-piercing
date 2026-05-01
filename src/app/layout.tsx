import type { Metadata } from "next";
import { Cinzel, Manrope } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

// Configuração das fontes para a estética editorial dark
const cinzel = Cinzel({ 
  subsets: ["latin"], 
  variable: "--font-headline" 
});

const manrope = Manrope({ 
  subsets: ["latin"], 
  variable: "--font-body" 
});

export const metadata: Metadata = {
  title: "Moth Piercing | Ritualize seu Estilo",
  description: "Joalheria exclusiva em Titânio G23 para quem encontra beleza nas sombras.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        {/* Ícones ritualísticos (Material Symbols) */}
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
        />
      </head>
      <body className={`${cinzel.variable} ${manrope.variable} font-body bg-background text-on-background antialiased`}>
        {/* O CartProvider estabelece o portal de dados para o carrinho em todo o site */}
        <CartProvider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}