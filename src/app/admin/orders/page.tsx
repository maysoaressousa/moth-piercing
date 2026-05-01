import { prisma } from "@/lib/prisma";
import { updateOrderStatus } from "@/actions/admin";

export default async function AdminOrdersPage() {
  // Busca todos os pedidos e seus itens vinculados
  const orders = await prisma.order.findMany({
    include: { items: { include: { product: true } } },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-8 text-[#e5e2e1]">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 border-b border-zinc-900 pb-8 flex justify-between items-end">
          <div>
            <h1 className="font-headline text-4xl uppercase tracking-tighter">Gestão do Coven</h1>
            <p className="text-secondary mt-2 font-body italic">Controle o fluxo de artefatos de titânio.</p>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-primary uppercase tracking-widest">Total de Rituais</span>
            <p className="text-3xl font-headline font-bold">{orders.length}</p>
          </div>
        </header>

        <div className="overflow-x-auto bg-[#0e0e0e] border border-zinc-900">
          <table className="w-full text-left text-sm font-body">
            <thead className="bg-black text-primary font-label text-[10px] uppercase tracking-widest border-b border-zinc-800">
              <tr>
                <th className="p-6">ID / Cliente</th>
                <th className="p-6">Joias</th>
                <th className="p-6">Total</th>
                <th className="p-6">Status</th>
                <th className="p-6 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-900">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-zinc-900/30 transition-colors">
                  <td className="p-6">
                    <div className="font-bold">#{order.id.slice(-6)}</div>
                    <div className="text-xs text-zinc-500">{order.customerEmail}</div>
                  </td>
                  <td className="p-6 text-xs text-zinc-400">
                    {order.items.map(item => `${item.quantity}x ${item.product.name}`).join(", ")}
                  </td>
                  <td className="p-6 font-label">R$ {order.totalAmount.toFixed(2)}</td>
                  <td className="p-6">
                    <span className={`px-3 py-1 text-[9px] uppercase font-bold tracking-widest border ${
                      order.status === "PAID" ? "border-green-900 text-green-500" : "border-zinc-700 text-zinc-500"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-6 text-right">
                    <form action={async () => {
                      "use client";
                      await updateOrderStatus(order.id, "PAID");
                    }}>
                      <button className="text-[10px] uppercase tracking-widest text-primary hover:text-[#ffb4aa] transition-colors">
                        Confirmar Pagamento
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}