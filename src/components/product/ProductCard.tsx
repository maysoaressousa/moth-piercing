import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  slug: string;
  price: number;
  images: string[]; // Esperamos 2 imagens para o efeito de hover
  material: string;
}

export default function ProductCard({ name, slug, price, images, material }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      {/* Container da Imagem com Efeito de Troca */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#131313] mb-6 border border-zinc-900/50">
        <Link href={`/product/${slug}`}>
          {/* Imagem 1: A joia em detalhe (Macro) */}
          <Image
            src={images[0]}
            alt={name}
            fill
            className="object-cover grayscale transition-opacity duration-700 group-hover:opacity-0"
          />
          {/* Imagem 2: A joia aplicada (no corpo) */}
          <Image
            src={images[1] || images[0]} 
            alt={`${name} em uso`}
            fill
            className="absolute inset-0 object-cover grayscale opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />
        </Link>

        {/* Botão de Adição Rápida */}
        <div className="absolute bottom-4 left-0 right-0 px-4 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <button className="w-full bg-[#4a0404] text-[#e5e2e1] py-3 font-label text-[10px] uppercase tracking-[0.2rem] hover:bg-[#ffb4aa] hover:text-[#4a0404] transition-colors">
            Adicionar ao Coven
          </button>
        </div>
      </div>

      {/* Informações da Joia */}
      <div className="space-y-1">
        <span className="text-[9px] uppercase tracking-[0.3rem] text-primary font-label">
          {material}
        </span>
        <h3 className="font-serif text-lg text-[#e5e2e1] group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="font-label text-sm text-[#c6c6c6] tracking-widest">
          R$ {price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </p>
      </div>
    </div>
  );
}