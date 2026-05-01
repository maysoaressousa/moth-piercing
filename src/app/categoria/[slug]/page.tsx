import ProductCard from "@/components/product/ProductCard";
import FilterSidebar from "@/components/product/FilterSidebar";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho Minimalista */}
        <header className="mb-16">
          <span className="font-label text-primary uppercase tracking-[0.4rem] text-[10px]">Arquivos do Coven</span>
          <h1 className="font-headline text-5xl md:text-6xl text-on-background mt-4 uppercase tracking-tighter">
            {params.slug}
          </h1>
          <p className="text-secondary mt-4 font-serif italic text-lg max-w-xl">
            Curadoria exclusiva de peças em Titânio G23 para {params.slug}.
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-16">
          {/* Barra Lateral de Filtros */}
          <FilterSidebar />

          {/* Grid de Produtos */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-8 border-b border-zinc-900 pb-4">
              <span className="text-[10px] font-label text-secondary uppercase tracking-widest">Exibindo 12 Joias</span>
              <select className="bg-transparent border-none text-[10px] font-label text-secondary uppercase tracking-widest focus:ring-0 cursor-pointer">
                <option>Ordenar: Mais Recentes</option>
                <option>Menor Preço</option>
                <option>Maior Preço</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {/* Exemplo de Produto */}
              <ProductCard 
                name="Argola Clicker Obsidian" 
                slug="argola-obsidian" 
                price={159} 
                material="Titânio G23" 
                images={["https://images.unsplash.com/photo-1611591437281-460bfbe1220a", "https://images.unsplash.com/photo-1596944286803-36ff195f0abb"]} 
              />
              {/* Repetir ProductCard conforme dados do banco */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}