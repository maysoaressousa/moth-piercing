"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateOrderStatus(orderId: string, newStatus: string) {
  try {
    await prisma.order.update({
      where: { id: orderId },
      data: { status: newStatus },
    });
    
    // Atualiza a página automaticamente para refletir a mudança
    revalidatePath("/admin/orders");
    return { success: true };
  } catch (error) {
    return { success: false, message: "Falha ao atualizar o status no abismo." };
  }
}