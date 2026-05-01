"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order");

  // Chave PIX fictícia para o ritual
  const pixKey = "cult@mothpiercing.com";

  const copyPixKey = () => {
    navigator.clipboard.writeText(pixKey);
    alert("Chave PIX copiada para o seu coven.");
  };

  return (
    <main className="min-h-screen bg-background pt-40 pb-20 px-8 flex flex-col items-center">
      <div className="max-w-2xl w-full text-center space-y-12">
        
        {/* Cabeçalho de Confirmação */}
        <header className="space-y-4">
          <span className="material-symbols-outlined text-primary text-6xl animate-pulse">
            check_circle
          </span>
          <h1 className="font-headline text-4xl md:text-5xl text-[#e5e2e1] uppercase tracking-tighter">
            Ritual Concluído
          </h1>
          <p className="font-body text-secondary italic">
            O destino de suas joias de titânio foi selado.
          </p>
        </header>

        {/* Bloco de Pagamento PIX */}
        <section className="bg-[#0e0e0e] border border-zinc-900 p-10 space-y-8">
          <div className="space-y-2">
            <h2 className="font-label text-[10px] text-primary uppercase tracking-[0.3rem]">
              Oferenda Necessária (PIX)
            </h2>
            <p className="text-xs text-zinc-500 font-body">
              Escaneie o código ou utilize a chave abaixo para finalizar a transação.
            </p>
          </div>

          {/* QR Code Placeholder */}
          <div className="w-48 h-48 bg-white mx-auto p-2 flex items-center justify-center">
            <div className="w-full h-full border-4 border-black bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=MothPiercingRitual')] bg-cover" />
          </div>

          <div className="space-y-4">
            <div className="bg-black border border-zinc-800 p-4 flex justify-between items-center">
              <code className="text-xs text-zinc-400 font-mono">{pixKey}</code>
              <button 
                onClick={copyPixKey}
                className="text-[10px] font-label text-primary uppercase hover:text-[#ffb4aa] transition-colors"
              >
                Copiar
              </button>
            </div>
            
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest leading-relaxed">
              * Envie o comprovante respondendo ao e-mail de confirmação <br/> ou via direct para acelerar o envio.
            </p>
          </div>
        </section>

        {/* Detalhes do Pedido */}
        <footer className="pt-8 border-t border-zinc-900">
          <p className="text-xs text-secondary font-body">
            Identificador do Ritual: <span className="text-[#e5e2e1] font-mono">#{orderId || "DARK-VOID"}</span>
          </p>
          <button 
            onClick={() => window.location.href = "/"}
            className="mt-12 text-[10px] font-label text-zinc-500 uppercase tracking-[0.4rem] hover:text-primary transition-all"
          >
            Voltar para a Coleção
          </button>
        </footer>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="bg-background min-h-screen" />}>
      <SuccessContent />
    </Suspense>
  );
}