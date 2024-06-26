import { create } from "zustand";
import { IProduct } from "./productStore";

interface ICartStore {
  cartProducts: IProduct[];
  totalPrice: number;
  addProduct: (product: IProduct) => void;
  removeProduct: (id: string) => void;
  updateTotalPrice: () => void;
  cleanCart: () => void;
}

export const useCartStore = create<ICartStore>((set) => {
  return {
    cartProducts: [],
    totalPrice: 0,
    addProduct: (product) =>
      set((state) => ({ cartProducts: [...state.cartProducts, product] })),
    removeProduct: (id) =>
      set((state) => ({
        cartProducts: state.cartProducts.filter((item) => item.id !== id),
      })),
    updateTotalPrice: () =>
      set((state) => ({
        totalPrice: state.cartProducts.reduce(
          (acc, currentValue) => acc + currentValue.price,
          0
        ),
      })),
    cleanCart: () => set(() => ({ cartProducts: [] })),
  };
});
