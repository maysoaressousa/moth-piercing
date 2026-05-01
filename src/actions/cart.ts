"use server";

import { prisma } from "@/lib/prisma";

// Interface para os itens que vêm do CartContext
interface CartItemInput {
  id: string; // Este é o slug ou ID do produto
  quantity: number;
}

interface CheckoutData {
  email: string;
  name: string;
  address: string;
  items: CartItemInput[];
}

export async function createOrder(data: CheckoutData) {
  try {
    // 1. Início do Ritual: Validação dos itens no banco de dados
    const productIds = data.items.map(item => item.id);
    
    const dbProducts = await prisma.product.findMany({
      where: {
        id: { in: productIds }
      }
    });

    if (dbProducts.length !== data.items.length) {
      throw new Error("Alguns artefatos selecionados não foram encontrados no abismo.");
    }

    // 2. Cálculo do Sacrifício (Total) no Servidor
    // Nunca confie no preço enviado pelo cliente/frontend
    let totalOrderAmount = 0;
    const orderItemsData = data.items.map(item => {
      const product = dbProducts.find(p => p.id === item.id);
      if (!product) throw new Error("Produto inválido.");
      
      const itemTotal = product.price * item.quantity;
      totalOrderAmount += itemTotal;

      return {
        productId: product.id,
        quantity: item.quantity,
        priceAtTime: product.price // Salva o preço exato do momento da compra
      };
    });

    // 3. Registro no Prisma: Criando a Ordem e os Itens simultaneamente
    const newOrder = await prisma.order.create({
      data: {
        customerEmail: data.email,
        customerName: data.name,
        address: data.address,
        totalAmount: totalOrderAmount,
        status: "PENDING", // Status inicial do ritual
        items: {
          create: orderItemsData
        }
      }
    });

    return { 
      success: true, 
      orderId: newOrder.id,
      message: "O pedido foi registrado com sucesso. Aguardando a oferenda (pagamento)." 
    };

  } catch (error) {
    console.error("Erro no processamento do checkout:", error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : "Ocorreu uma falha no ritual de checkout." 
    };
  }
}