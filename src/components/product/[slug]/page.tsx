import Image from "next/image";

export default function ProductPage({ params }: { params: { slug: string } }) {
  // Dados mockados para visualização do layout
  const product = {
    name: "Argola Clicker Real cravejada",
    price: 189.00,
    material: "Titânio G23 (Grau Implante)",
    description: "Joia de luxo com fechamento clicker e cravação manual de zircônias. Biocompatível e ideal para perfurações já cicatrizadas.",
    gauge: "1.2mm",
    diameter: "8mm",
    threading: "Clicker (Sem rosca)",
    images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a", "https://images.unsplash.com/photo-1596944286803-36ff195f0abb"]
  };

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Galeria de Imagens */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden bg-surface-container">
            <Image 
              src={product.images[0]} 
              alt={product.name} 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {product.images.map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden bg-surface-container cursor-pointer">
                <Image src={img} alt="Thumb" fill className="object-cover grayscale opacity-50 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        {/* Informações e Compra */}
        <div className="flex flex-col">
          <span className="text-primary font-label uppercase tracking-[0.3rem] text-xs mb-2">
            {product.material}
          </span>
          <h1 className="font-headline text-4xl md:text-5xl mb-6 text-on-background uppercase">
            {product.name}
          </h1>
          <p className="font-label text-2xl text-secondary mb-8 tracking-widest">
            R$ {product.price.toFixed(2)}
          </p>

          <div className="border-y border-zinc-900 py-8 mb-8">
            <h3 className="font-headline text-sm text-primary mb-4 uppercase tracking-widest">Especificações Ritualísticas</h3>
            <ul className="grid grid-cols-2 gap-y-4 text-sm font-body text-secondary">
              <li><strong className="text-on-background uppercase text-[10px] tracking-widest block">Espessura (Gauge):</strong> {product.gauge}</li>
              <li><strong className="text-on-background uppercase text-[10px] tracking-widest block">Diâmetro:</strong> {product.diameter}</li>
              <li><strong className="text-on-background uppercase text-[10px] tracking-widest block">Fechamento:</strong> {product.threading}</li>
              <li><strong className="text-on-background uppercase text-[10px] tracking-widest block">Biocompatível:</strong> Sim</li>
            </ul>
          </div>

          <p className="text-[#c6c6c6] leading-relaxed mb-10 font-body">
            {product.description}
          </p>

          <button className="w-full bg-primary-container text-on-background py-5 uppercase font-label text-sm tracking-[0.2rem] hover:bg-on-primary-container transition-all duration-500">
            Adicionar ao Carrinho[cite: 1]
          </button>
        </div>
      </div>
    </main>
  );
}