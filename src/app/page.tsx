import Image from "next/image";
import ProductCard from "@/components/product/ProductCard";

export default function Home() {
  return (
    <main>
      {/* Hero Section - Ritualize seu Estilo */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a" 
          alt="Hero Moth" 
          fill 
          className="object-cover grayscale brightness-[0.25]" 
          priority
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-8 uppercase text-[#e5e2e1]">
            Ritualize seu Estilo<br/>
            <span className="text-primary italic font-serif text-3xl md:text-4xl">
              Piercings que expressam sua essência
            </span>
          </h1>
          <button className="px-12 py-4 border border-zinc-700 hover:bg-[#4a0404] hover:text-[#e5e2e1] transition-all duration-500 uppercase tracking-[0.2rem] text-sm font-bold">
            Compre Agora
          </button>
        </div>
      </section>

      {/* Section: Bestsellers (Onde o ProductCard entra em ação) */}
      <section className="py-32 px-8 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-primary uppercase tracking-[0.3rem] text-xs font-label">The Favorites</span>
            <h2 className="font-headline text-4xl text-[#e5e2e1] mt-2 uppercase">Bestsellers</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Exemplo de uso do componente */}
            <ProductCard 
              name="Argola Clicker Abyss" 
              slug="argola-clicker-abyss" 
              price={189} 
              material="Titânio G23" 
              images={[
                "https://images.unsplash.com/photo-1596944286803-36ff195f0abb", 
                "https://images.unsplash.com/photo-1533601017-dc61895e03c0"
              ]} 
            />
          </div>
        </div>
      </section>
    </main>
  );
}