import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] w-full pt-24 pb-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-16">
        
        {/* Editorial / Manifesto */}
        <div className="space-y-6">
          <h3 className="font-headline text-lg text-[#e5e2e1] uppercase tracking-[0.2rem]">
            The Nocturnal Editorial
          </h3>
          <p className="text-sm text-[#c6c6c6] font-body leading-relaxed max-w-xs">
            Artefatos biocompatíveis para quem encontra beleza nas sombras. Cada joia é um ritual de expressão própria.
          </p>
        </div>

        {/* Links do Coven */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-label text-[10px] text-[#ffb4aa] uppercase tracking-widest mb-6">Explorar</h4>
            <ul className="space-y-3 text-xs text-[#c6c6c6] font-body">
              <li><Link href="/shop" className="hover:text-[#e5e2e1]">Loja Completa</Link></li>
              <li><Link href="/new" className="hover:text-[#e5e2e1]">Lançamentos</Link></li>
              <li><Link href="/care" className="hover:text-[#e5e2e1]">Cuidados (Aftercare)</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label text-[10px] text-[#ffb4aa] uppercase tracking-widest mb-6">Suporte</h4>
            <ul className="space-y-3 text-xs text-[#c6c6c6] font-body">
              <li><Link href="/shipping" className="hover:text-[#e5e2e1]">Envio</Link></li>
              <li><Link href="/returns" className="hover:text-[#e5e2e1]">Trocas</Link></li>
              <li><Link href="/faq" className="hover:text-[#e5e2e1]">FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* Contato / Localização */}
        <div className="space-y-6">
          <h4 className="font-label text-[10px] text-[#ffb4aa] uppercase tracking-widest">The Sanctum</h4>
          <div className="text-xs text-[#c6c6c6] font-body space-y-2">
            <p>Fortaleza, CE - Brasil</p>
            <p>Atendimento: cult@mothpiercing.com</p>
            <div className="flex gap-4 pt-4">
              <span className="material-symbols-outlined text-sm cursor-pointer hover:text-[#ffb4aa]">public</span>
              <span className="material-symbols-outlined text-sm cursor-pointer hover:text-[#ffb4aa]">alternate_email</span>
            </div>
          </div>
        </div>
      </div>

      {/* Assinatura Final */}
      <div className="mt-20 pt-8 border-t border-zinc-900/30 text-center">
        <p className="text-[9px] font-label text-zinc-700 uppercase tracking-[0.4rem]">
          © 2026 Moth Piercing. Curadoria de Mayara Soares.
        </p>
      </div>
    </footer>
  );
}