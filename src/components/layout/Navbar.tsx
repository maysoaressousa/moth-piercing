"use client";

import Link from "next/link";
import { useState } from "react";
import CartDrawer from "@/components/cart/CartDrawer";

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          
          {/* Logo - Estética Dark */}
          <Link href="/" className="font-headline text-2xl tracking-[0.3rem] text-[#e5e2e1] hover:text-[#ffb4aa] transition-colors">
            MOTH PIERCING
          </Link>

          {/* Links de Navegação - Categorias Técnicas */}
          <div className="hidden md:flex items-center gap-10">
            <NavLink href="/categoria/orelha">Orelha</NavLink>
            <NavLink href="/categoria/septo">Septo</NavLink>
            <NavLink href="/categoria/boca">Boca</NavLink>
            <NavLink href="/categoria/titanio-g23" className="text-[#ffb4aa]">Titânio G23</NavLink>
          </div>

          {/* Ações Ritualísticas */}
          <div className="flex items-center gap-6 text-[#e5e2e1]">
            <button className="hover:text-[#ffb4aa] transition-colors">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="hover:text-[#ffb4aa] transition-colors relative"
            >
              <span className="material-symbols-outlined">shopping_bag</span>
              {/* Badge de itens no carrinho */}
              <span className="absolute -top-1 -right-1 bg-[#4a0404] text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Carrinho Lateral */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

function NavLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link 
      href={href} 
      className={`font-label text-[11px] uppercase tracking-[0.2rem] text-[#c6c6c6] hover:text-[#ffb4aa] transition-all duration-300 ${className}`}
    >
      {children}
    </Link>
  );
}