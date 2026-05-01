"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { cart, total, removeItem, isCartOpen, setIsCartOpen } = useCart();

  // Se o ritual do carrinho não estiver aberto, não renderiza nada
  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay Escuro com Desfoque */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-500"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Painel Lateral do Coven */}
      <aside className="fixed right-0 top-0 h-full w-full max-w-md bg-[#131313] z-[70] border-l border-zinc-900 shadow-2xl flex flex-col p-8 animate-in slide-in-from-right duration-500">
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-headline text-2xl text-[#e5e2e1] uppercase tracking-[0.2rem]">Seu Coven</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-secondary hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>

        {/* Lista Dinâmica de Joias */}
        <div className="flex-grow overflow-y-auto space-y-8 pr-2 custom-scrollbar">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center opacity-30 text-center">
               <span className="material-symbols-outlined text-6xl mb-4">skull</span>
               <p className="font-serif italic text-[#c6c6c6]">O abismo está vazio. Inicie seu ritual de escolha.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 group">
                <div className="relative w-20 h-24 bg-surface-container overflow-hidden border border-zinc-900/50">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    sizes="80px"
                  />
                </div>
                <div className="flex flex-col justify-between py-1 flex-1">
                  <div>
                    <h4 className="font-serif text-sm text-[#e5e2e1]">{item.name}</h4>
                    <p className="text-[10px] text-primary uppercase tracking-widest mt-1">{item.material}</p>
                    <p className="text-[10px] text-zinc-500 mt-1">Qtd: {item.quantity}</p>
                  </div>
                  <div className="flex justify-between items-end w-full">
                    <span className="text-xs font-label text-secondary">
                      R$ {(item.price * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-[10px] uppercase tracking-widest text-zinc-600 hover:text-primary transition-colors"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Rodapé de Finalização */}
        {cart.length > 0 && (
          <div className="mt-auto pt-8 border-t border-zinc-900 space-y-6">
            <div className="flex justify-between items-end">
              <span className="font-label text-xs text-secondary uppercase tracking-widest">Subtotal</span>
              <span className="font-headline text-xl text-[#e5e2e1]">
                R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
            </div>
            
            <button className="w-full bg-[#4a0404] text-[#e5e2e1] py-5 uppercase font-label text-xs tracking-[0.3rem] hover:bg-[#ffb4aa] hover:text-[#4a0404] transition-all duration-500">
              Finalizar Ritual
            </button>
          </div>
        )}
      </aside>
    </>
  );
}