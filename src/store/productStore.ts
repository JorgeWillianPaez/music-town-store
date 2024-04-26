import { create } from "zustand";
import { products } from "../utils/products";

export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  addedToCart: boolean;
}

export interface IProductStore {
  products: IProduct[];
  createProduct: (product: IProduct) => void;
  currentId: number;
  updateId: () => void;
}

export const useProductStore = create<IProductStore>((set) => {
  return {
    currentId: 17,
    products: products,
    createProduct: (product) =>
      set((state) => ({ products: [...state.products, product] })),
    updateId: () => set((state) => ({ currentId: state.currentId + 1 })),
  };
});
