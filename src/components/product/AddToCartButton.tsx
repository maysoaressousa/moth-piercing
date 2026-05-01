"use client";

import { useCart } from "@/context/CartContext";

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    material: string;
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart();

  return (
    <button 
      onClick={() => addItem(product)}
      className="w-full bg-[#4a0404] text-[#e5e2e1] py-5 uppercase font-label text-xs tracking-[0.3rem] hover:bg-[#ffb4aa] hover:text-[#4a0404] transition-all duration-500 shadow-lg"
    >
      Invocação ao Carrinho
    </button>
  );
}