import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartItems: [
    {
      id: 1,
      title: "Training Kesehatan Dasar",
      price: 1200000,
      discountedPrice: 0,
      image: [{
        url: "/nurse-training.png"
      }],
      quantity: 1,
      hospital: "Penyedia: RS pusat pertamina (RSPP)",
    },
    {
      id: 2,
      title: "Advanced Medical Training",
      price: 2500000,
      image: [{
        url: "/vaksin.png"
      }],
      quantity: 2,
      hospital: "Penyedia: RS pusat pertamina (RSPP)",
    },
  ],
  showModal: false,
  modalItem:  null,

  addToCartFromPayNow: (item:any) =>
    set((state:any) => ({
      cartItems: [...state.cartItems, item],
    })),

  removeFromCart: (id:string) =>
    set((state:any) => ({
      cartItems: state.cartItems.filter((item:any) => item.id !== id),
    })),

  showAddToCartModal: (item:any) => 
    set((state:any) => ({
      showModal: true,
      modalItem: item,
      cartItems: [...state.cartItems, item],
    })),
  
  hideAddToCartModal: () => 
    set({
      showModal: false,
      modalItem: null
    }),
}));
