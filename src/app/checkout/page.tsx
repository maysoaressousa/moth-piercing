export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Coluna da Esquerda: Formulários */}
        <div className="lg:col-span-7 space-y-12">
          <header>
            <h1 className="font-headline text-4xl text-on-background uppercase tracking-tighter">O Último Ritual</h1>
            <p className="text-secondary mt-2 font-body italic">Preencha os pergaminhos para o envio de suas joias.</p>
          </header>

          {/* Dados de Envio */}
          <section className="space-y-6">
            <h2 className="font-headline text-sm text-primary uppercase tracking-widest border-b border-zinc-900 pb-2">1. Destino do Artefato</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CheckoutInput label="Email" placeholder="alma@exemplo.com" type="email" />
              <CheckoutInput label="Nome Completo" placeholder="Seu nome" />
              <CheckoutInput label="CEP" placeholder="00000-000" className="md:col-span-1" />
              <CheckoutInput label="Cidade" placeholder="Sua Cidade" className="md:col-span-1" />
              <CheckoutInput label="Endereço" placeholder="Rua, Travessa..." className="md:col-span-2" />
            </div>
          </section>

          {/* Pagamento */}
          <section className="space-y-6">
            <h2 className="font-headline text-sm text-primary uppercase tracking-widest border-b border-zinc-900 pb-2">2. Oferenda (Pagamento)</h2>
            <div className="space-y-4">
              <label className="flex items-center gap-4 p-4 border border-zinc-800 bg-surface-container-low cursor-pointer hover:border-primary transition-colors">
                <input type="radio" name="payment" className="accent-primary" />
                <span className="font-label text-xs uppercase tracking-widest">Cartão de Crédito</span>
              </label>
              <label className="flex items-center gap-4 p-4 border border-zinc-800 bg-surface-container-low cursor-pointer hover:border-primary transition-colors">
                <input type="radio" name="payment" className="accent-primary" />
                <span className="font-label text-xs uppercase tracking-widest">PIX (Com 5% de desconto)</span>
              </label>
            </div>
          </section>
        </div>

        {/* Coluna da Direita: Resumo do Pedido */}
        <div className="lg:col-span-5">
          <aside className="sticky top-32 bg-[#0e0e0e] border border-zinc-900 p-8">
            <h3 className="font-headline text-lg text-on-background uppercase tracking-widest mb-8">Resumo do Coven</h3>
            
            <div className="space-y-6 mb-8">
              {/* Item de exemplo */}
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-sm text-on-background font-body">Argola Clicker Obsidian</span>
                  <span className="text-[10px] text-secondary uppercase tracking-widest">Titânio G23 | 1.2mm</span>
                </div>
                <span className="text-sm text-secondary">R$ 159,00</span>
              </div>
            </div>

            <div className="border-t border-zinc-900 pt-6 space-y-4">
              <div className="flex justify-between text-xs font-label uppercase tracking-widest text-secondary">
                <span>Subtotal</span>
                <span>R$ 159,00</span>
              </div>
              <div className="flex justify-between text-xs font-label uppercase tracking-widest text-secondary">
                <span>Frete</span>
                <span>Calculado no envio</span>
              </div>
              <div className="flex justify-between pt-4 text-xl font-headline text-primary uppercase">
                <span>Total</span>
                <span>R$ 159,00</span>
              </div>
            </div>

            <button className="w-full mt-10 bg-primary-container text-on-background py-5 uppercase font-label text-xs tracking-[0.3rem] hover:bg-on-primary-container transition-all">
              Confirmar Ritual
            </button>
          </aside>
        </div>

      </div>
    </main>
  );
}

function CheckoutInput({ label, placeholder, type = "text", className = "" }: { label: string; placeholder: string; type?: string; className?: string }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="font-label text-[10px] uppercase tracking-[0.2rem] text-secondary">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder}
        className="bg-transparent border-b border-zinc-800 py-3 text-sm focus:border-primary focus:ring-0 transition-colors placeholder:text-zinc-700"
      />
    </div>
  );
}