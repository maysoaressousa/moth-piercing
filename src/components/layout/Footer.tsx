import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] w-full pt-20 pb-10 border-t border-zinc-900">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 max-w-7xl mx-auto">
        
        {/* Filosofia da Marca */}
        <div>
          <div className="text-xl font-headline text-[#e5e2e1] mb-4 uppercase tracking-widest">
            THE NOCTURNAL EDITORIAL
          </div>
          <p className="text-sm text-[#c6c6c6] font-body tracking-wide leading-relaxed">
            Criando artefatos para aqueles que encontram beleza nas sombras. Somos mais que uma marca; somos um encontro de almas sombrias.
          </p>
          <div className="flex gap-4 mt-8 text-[#ffb4aa]">
            <SocialIcon icon="public" />
            <SocialIcon icon="video_library" />
            <SocialIcon icon="alternate_email" />
          </div>
        </div>

        {/* Links de Serviço e Manifesto */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-headline text-sm text-[#ffb4aa] mb-6 uppercase tracking-widest">Manifesto</h4>
            <ul className="space-y-3">
              <FooterLink href="/story">Nossa História</FooterLink>
              <FooterLink href="/craft">Artesanato Ético</FooterLink>
              <FooterLink href="/sustainability">Sustentabilidade</FooterLink>
            </ul>
          </div>
          <div>
            <h4 className="font-headline text-sm text-[#ffb4aa] mb-6 uppercase tracking-widest">Guia[cite: 1]</h4>
            <ul className="space-y-3">
              <FooterLink href="/shipping">Envio</FooterLink>
              <FooterLink href="/returns">Devoluções</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
            </ul>
          </div>
        </div>

        {/* Localização e Suporte (The Sanctum) */}
        <div>
          <h4 className="font-headline text-sm text-[#ffb4aa] mb-6 uppercase tracking-widest">The Sanctum[cite: 1]</h4>
          <p className="text-sm text-[#c6c6c6] mb-4 font-body tracking-wide">
            Fortaleza, Ceará[cite: 1]<br />
            Brasil
          </p>
          <p className="text-sm text-[#c6c6c6] font-body tracking-wide">
            Suporte: cult@mothpiercing.com[cite: 1]<br />
            Atendimento: Meia-noite às 4h (GMT)[cite: 1]
          </p>
        </div>
      </div>

      {/* Copyright e Assinatura Final */}
      <div className="mt-20 text-center border-t border-zinc-900/30 pt-10">
        <p className="text-[9px] font-label text-[#4a0404] tracking-[0.3rem] uppercase">
          © 2026 THE NOCTURNAL EDITORIAL. JUNTE-SE AO COVEN.[cite: 1]
        </p>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-[#c6c6c6] hover:text-[#ffb4aa] transition-colors duration-300">
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  return (
    <a href="#" className="hover:scale-110 transition-transform duration-200">
      <span className="material-symbols-outlined text-[20px]">{icon}</span>
    </a>
  );
}