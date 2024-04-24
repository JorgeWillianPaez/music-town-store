import { create } from "zustand";
import { IProduct } from "./productStore";

interface ICartStore {
  cart: IProduct[];
  addProduct: (product: IProduct) => void;
  removeFromCart: (id: number) => void;
}

export const useCartStore = create<ICartStore>((set) => {
  return {
    cart: [],
    addProduct: (product) =>
      set((state) => ({ cart: [...state.cart, product] })),
    removeFromCart: (id) =>
      set((state) => ({ cart: state.cart.filter((item) => item.id === id) })),
  };
});
