import Image from "next/image";
import { prisma } from "@/lib/prisma"; // Conexão com banco
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/product/AddToCartButton";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = await prisma.product.findUnique({ where: { slug: params.slug } });

  if (!product) return { title: "Produto não encontrado" };

  return {
    title: `${product.name} | Joia em Titânio G23 | Moth Piercing`,
    description: `Compre ${product.name} na Moth Piercing. Joalheria biocompatível de alta qualidade com estética dark. Entrega em todo o Brasil.`,
    openGraph: {
      images: [product.images[0]],
    },
  };
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  // Busca a joia no banco de dados usando o slug da URL
  const product = await prisma.product.findUnique({
    where: { slug: params.slug },
  });

  if (!product) notFound();

  return (
    <main className="min-h-screen pt-32 pb-20 px-8 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Galeria de Imagem (Macro) */}
        <div className="aspect-[4/5] relative bg-[#131313] border border-zinc-900 overflow-hidden">
          <Image 
            src={product.images[0]} 
            alt={product.name} 
            fill 
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            priority
          />
        </div>

        {/* Informações Técnicas e Compra */}
        <div className="flex flex-col h-full justify-center">
          <span className="text-primary font-label uppercase tracking-[0.4rem] text-[10px] mb-4">
            {product.material}
          </span>
          <h1 className="font-headline text-5xl text-on-background mb-6 uppercase tracking-tighter leading-tight">
            {product.name}
          </h1>
          
          <div className="text-3xl font-label text-secondary mb-10 tracking-widest">
            R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </div>

          <div className="border-y border-zinc-900 py-8 mb-12 space-y-6">
            <div>
              <h3 className="font-headline text-xs text-primary mb-3 uppercase tracking-widest">Especificações</h3>
              <ul className="grid grid-cols-2 gap-4 text-[11px] text-zinc-400 uppercase font-body tracking-wider">
                <li><strong className="text-zinc-600 mr-2">Calibre:</strong> 1.2mm</li>
                <li><strong className="text-zinc-600 mr-2">Rosca:</strong> Interna</li>
                <li><strong className="text-zinc-600 mr-2">Polimento:</strong> Espelhado</li>
                <li><strong className="text-zinc-600 mr-2">Biocompatível:</strong> Sim</li>
              </ul>
            </div>
          </div>

          <AddToCartButton 
            product={{
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.images[0],
              material: product.material
            }} 
          />

          <p className="mt-8 text-[10px] text-zinc-600 text-center uppercase tracking-widest font-body">
            Entrega ritualística em todo o Brasil.
          </p>
        </div>
      </div>
    </main>
  );
}