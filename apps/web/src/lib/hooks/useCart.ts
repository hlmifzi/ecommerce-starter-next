import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartItems: [
    {
      id: 1,
      name: "Training Kesehatan Dasar",
      price: 1200000,
      discountedPrice: 0,
      image: "/nurse-training.png",
      quantity: 1,
      hospital: "Penyedia: RS pusat pertamina (RSPP)",
    },
    {
      id: 2,
      name: "Advanced Medical Training",
      price: 2500000,
      image: "/vaksin.png",
      quantity: 2,
      hospital: "Penyedia: RS pusat pertamina (RSPP)",
    },
  ],

  // contoh tambah ke cart
  addToCart: (item:any) =>
    set((state:any) => ({
      cartItems: [...state.cartItems, item],
    })),

  removeFromCart: (id:string) =>
    set((state:any) => ({
      cartItems: state.cartItems.filter((item:any) => item.id !== id),
    })),
}));
