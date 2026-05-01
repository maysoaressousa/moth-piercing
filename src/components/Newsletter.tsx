export default function Newsletter() {
  return (
    <section className="py-24 px-8 border-t border-zinc-900 bg-[#0e0e0e]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-headline text-3xl mb-4 text-[#e5e2e1]">Junte-se ao COVEN[cite: 1]</h2>
        <p className="text-[#c6c6c6] mb-10 max-w-lg mx-auto">
          Assine para receber coleções secretas, dicas sobre o oculto e convites exclusivos para nossas vendas à meia-noite.[cite: 1]
        </p>
        <form className="flex flex-col md:flex-row gap-4">
          <input 
            className="flex-grow bg-transparent border-0 border-b border-zinc-700 py-4 px-2 focus:ring-0 focus:border-[#ffb4aa] transition-colors text-[#e5e2e1] placeholder:text-zinc-600 font-label uppercase text-xs tracking-widest" 
            placeholder="Seu e-mail das sombras" 
            type="email"
          />
          <button className="bg-[#4a0404] text-[#e5e2e1] px-12 py-4 uppercase font-label text-xs tracking-widest hover:bg-[#ffb4aa] hover:text-[#4a0401] transition-colors duration-300">
            invoque seu email[cite: 1]
          </button>
        </form>
      </div>
    </section>
  );
}