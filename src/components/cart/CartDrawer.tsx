"use client";

import { useEffect } from "react";
import Image from "next/image";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  // Impede o scroll do fundo quando o carrinho está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      {/* Overlay - O fundo que escurece */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Painel do Carrinho */}
      <aside 
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-[#131313] z-[70] border-l border-zinc-900 shadow-2xl transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8">
          {/* Header do Carrinho */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-headline text-2xl text-[#e5e2e1] uppercase tracking-[0.2rem]">
              Seu Coven
            </h2>
            <button onClick={onClose} className="text-secondary hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
          </div>

          {/* Lista de Itens (Scrollable) */}
          <div className="flex-grow overflow-y-auto space-y-8 pr-2 custom-scrollbar">
            {/* Exemplo de Item no Carrinho */}
            <div className="flex gap-4">
              <div className="relative w-20 h-24 bg-surface-container overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a" 
                  alt="Item" fill className="object-cover grayscale" 
                />
              </div>
              <div className="flex flex-col justify-between py-1">
                <div>
                  <h4 className="font-serif text-sm text-[#e5e2e1]">Argola Clicker Obsidian</h4>
                  <p className="text-[10px] text-primary uppercase tracking-widest mt-1">1.2mm | 8mm</p>
                </div>
                <div className="flex justify-between items-end w-full">
                  <span className="text-xs font-label text-secondary">R$ 159,00</span>
                  <button className="text-[10px] uppercase tracking-widest text-zinc-600 hover:text-red-900 transition-colors">Remover</button>
                </div>
              </div>
            </div>
            
            {/* Estado Vazio (Descomente para testar) */}
            {/* 
            <div className="h-full flex flex-col items-center justify-center opacity-30">
               <span className="material-symbols-outlined text-6xl mb-4">skull</span>
               <p className="font-serif italic">O abismo está vazio.</p>
            </div> 
            */}
          </div>

          {/* Checkout / Footer */}
          <div className="mt-auto pt-8 border-t border-zinc-900 space-y-6">
            <div className="flex justify-between items-end">
              <span className="font-label text-xs text-secondary uppercase tracking-widest">Subtotal</span>
              <span className="font-headline text-xl text-[#e5e2e1]">R$ 159,00</span>
            </div>
            
            <p className="text-[10px] text-zinc-500 font-body leading-relaxed">
              * Frete e impostos calculados na etapa final do ritual.
            </p>

            <button className="w-full bg-[#4a0404] text-[#e5e2e1] py-5 uppercase font-label text-xs tracking-[0.3rem] hover:bg-[#ffb4aa] hover:text-[#4a0404] transition-all duration-500">
              Finalizar Ritual
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}