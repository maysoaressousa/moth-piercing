import Image from "next/image";
import ProductCard from "@/components/product/ProductCard";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a" 
          alt="Hero Moth" fill className="object-cover grayscale brightness-[0.25]" 
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-8 uppercase">
            Ritualize seu Estilo<br/>
            <span className="text-primary italic font-serif text-3xl">Piercings que expressam sua essência</span>
          </h1>
          <button className="px-12 py-4 border border-zinc-700 hover:bg-primary-container transition-all uppercase tracking-widest text-sm font-bold">
            Compre Agora
          </button>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-primary uppercase tracking-[0.3rem] text-xs">The Favorites</span>
          <h2 className="font-headline text-4xl mt-2">Bestsellers[cite: 1]</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* O ProductCard usará as fotos que você incluirá depois */}
          <ProductCard 
            name="Argola Clicker Abyss" 
            slug="argola-abyss" 
            price={189} 
            material="Titânio G23" 
            images={["https://images.unsplash.com/photo-1596944286803-36ff195f0abb", "https://images.unsplash.com/photo-1533601017-dc61895e03c0"]} 
          />
        </div>
      </section>
    </main>
  );
}