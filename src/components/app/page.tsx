import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - "Ritualize seu Estilo" */}
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a" 
            alt="Moth Piercing Titânio"
            fill
            className="object-cover grayscale brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#131313]/40 to-[#131313]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-[#e5e2e1] mb-8 uppercase">
            ritualize seu estilo<br/>
            <span className="text-[#ffb4aa] italic font-serif text-3xl md:text-4xl">
              Piercings que expressam sua essência
            </span>
          </h1>
          <button className="px-12 py-4 uppercase tracking-[0.2rem] text-sm font-bold ghost-button-hover">
            compre agora
          </button>
        </div>
      </header>

      {/* Explore the Abyss - Categorias Bento Grid */}
      <section className="py-32 px-8 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col mb-16">
            <span className="font-label text-[#ffb4aa] uppercase tracking-[0.3rem] text-xs mb-2">Curated Collections[cite: 1]</span>
            <h2 className="font-headline text-4xl text-[#e5e2e1]">Explore the Abyss[cite: 1]</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px]">
            {/* Orelha */}
            <CategoryCard title="Orelha" span="md:col-span-8" img="https://images.unsplash.com/photo-1596944286803-36ff195f0abb" />
            {/* Septo */}
            <CategoryCard title="Septo" span="md:col-span-4" img="https://images.unsplash.com/photo-1533601017-dc61895e03c0" />
            {/* Boca */}
            <CategoryCard title="Boca" span="md:col-span-4" img="https://images.unsplash.com/photo-1590548301541-28562752109a" />
            {/* Titânio G23 */}
            <CategoryCard title="Titânio G23" span="md:col-span-8" img="https://images.unsplash.com/photo-1605100804763-247f67b3557e" />
          </div>
        </div>
      </section>
    </main>
  );
}

function CategoryCard({ title, span, img }: { title: string, span: string, img: string }) {
  return (
    <div className={`${span} group relative overflow-hidden bg-[#201f1f] cursor-pointer`}>
      <Image 
        src={img} 
        alt={title} 
        fill 
        className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:brightness-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-headline text-3xl text-[#e5e2e1] opacity-0 transition-all duration-500 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
          {title}
        </span>
      </div>
    </div>
  );
}