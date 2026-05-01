import ProductCard from "@/components/product/ProductCard";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 border-b border-zinc-900 pb-8">
          <h1 className="font-headline text-5xl uppercase tracking-tight">
            Coleção {params.slug}[cite: 1]
          </h1>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {/* Aqui entrará o mapeamento dos produtos reais vindos do banco */}
          <p className="text-secondary italic">Explorando o abismo de {params.slug}...[cite: 1]</p>
        </div>
      </div>
    </main>
  );
}