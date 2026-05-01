"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { createOrder } from "@/actions/cart";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, total } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Estados para capturar os dados do formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFinalizeRitual = async () => {
    if (cart.length === 0) return;
    setLoading(true);
    setError(null);

    // Preparamos os itens para o formato que a Action espera
    const items = cart.map((item) => ({
      id: item.id,
      quantity: item.quantity,
    }));

    const result = await createOrder({
      ...formData,
      items,
    });

    if (result.success) {
      // Redireciona para uma página de sucesso ou PIX
      router.push(`/checkout/success?order=${result.orderId}`);
    } else {
      setError(result.message || "Falha no ritual.");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Lado Esquerdo: Formulários */}
        <div className="lg:col-span-7 space-y-12 text-[#e5e2e1]">
          <header>
            <h1 className="font-headline text-4xl uppercase tracking-tighter">O Último Ritual</h1>
            <p className="text-secondary mt-2 font-body italic">Selle o destino das suas joias de titânio.</p>
          </header>

          <section className="space-y-6">
            <h2 className="font-headline text-sm text-primary uppercase tracking-widest border-b border-zinc-900 pb-2">Identificação</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-label text-[10px] uppercase tracking-[0.2rem] text-secondary">Seu Nome</label>
                <input 
                  name="name" 
                  onChange={handleInputChange}
                  className="bg-transparent border-b border-zinc-800 py-3 text-sm focus:border-primary transition-colors outline-none" 
                  placeholder="Nome completo"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-[10px] uppercase tracking-[0.2rem] text-secondary">E-mail</label>
                <input 
                  name="email" 
                  type="email"
                  onChange={handleInputChange}
                  className="bg-transparent border-b border-zinc-800 py-3 text-sm focus:border-primary transition-colors outline-none" 
                  placeholder="alma@exemplo.com"
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-label text-[10px] uppercase tracking-[0.2rem] text-secondary">Endereço de Entrega</label>
                <input 
                  name="address" 
                  onChange={handleInputChange}
                  className="bg-transparent border-b border-zinc-800 py-3 text-sm focus:border-primary transition-colors outline-none" 
                  placeholder="Rua, número, Fortaleza-CE"
                />
              </div>
            </div>
          </section>

          {error && <p className="text-red-900 text-xs font-label uppercase tracking-widest">{error}</p>}
        </div>

        {/* Lado Direito: Resumo e Botão */}
        <div className="lg:col-span-5">
          <aside className="sticky top-32 bg-[#0e0e0e] border border-zinc-900 p-8">
            <h3 className="font-headline text-lg text-[#e5e2e1] uppercase tracking-widest mb-8">Itens no Coven</h3>
            
            <div className="space-y-6 mb-8 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center text-sm">
                  <span className="text-secondary font-body">{item.quantity}x {item.name}</span>
                  <span className="text-[#e5e2e1]">R$ {(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-zinc-900 pt-6">
              <div className="flex justify-between items-end mb-10">
                <span className="font-label text-xs text-secondary uppercase tracking-widest">Total do Sacrifício</span>
                <span className="font-headline text-2xl text-primary font-bold">R$ {total.toFixed(2)}</span>
              </div>

              <button 
                onClick={handleFinalizeRitual}
                disabled={loading || cart.length === 0}
                className="w-full bg-[#4a0404] text-[#e5e2e1] py-5 uppercase font-label text-xs tracking-[0.3rem] hover:bg-[#ffb4aa] hover:text-[#4a0404] transition-all duration-500 disabled:opacity-30"
              >
                {loading ? "Processando..." : "Finalizar Ritual"}
              </button>
            </div>
          </aside>
        </div>

      </div>
    </main>
  );
}