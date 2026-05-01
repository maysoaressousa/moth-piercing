export default function FilterSidebar() {
  return (
    <aside className="w-full md:w-64 space-y-12">
      {/* Filtro por Tipo */}
      <div>
        <h3 className="font-headline text-xs text-primary uppercase tracking-[0.2rem] mb-6">Modelo de Joia</h3>
        <ul className="space-y-3">
          <FilterItem label="Argolas Clicker" count={12} />
          <FilterItem label="Labrets" count={8} />
          <FilterItem label="Ferraduras" count={5} />
          <FilterItem label="Topos & Adornos" count={14} />
        </ul>
      </div>

      {/* Filtro por Especificação Técnica */}
      <div>
        <h3 className="font-headline text-xs text-primary uppercase tracking-[0.2rem] mb-6">Calibre (Gauge)</h3>
        <div className="grid grid-cols-2 gap-2">
          {["1.0mm", "1.2mm", "1.6mm"].map((g) => (
            <button key={g} className="border border-zinc-800 py-2 text-[10px] font-label uppercase hover:border-primary transition-colors">
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Filtro por Preço */}
      <div>
        <h3 className="font-headline text-xs text-primary uppercase tracking-[0.2rem] mb-6">Oferenda (Preço)</h3>
        <input 
          type="range" 
          className="w-full accent-primary bg-zinc-900 h-1 appearance-none" 
          min="0" 
          max="500" 
        />
        <div className="flex justify-between mt-2 text-[10px] font-label text-secondary uppercase tracking-widest">
          <span>R$ 0</span>
          <span>R$ 500+</span>
        </div>
      </div>
    </aside>
  );
}

function FilterItem({ label, count }: { label: string; count: number }) {
  return (
    <li className="flex justify-between items-center group cursor-pointer">
      <span className="text-sm text-secondary group-hover:text-on-background transition-colors font-body">{label}</span>
      <span className="text-[9px] text-zinc-700 font-label">({count})</span>
    </li>
  );
}