import { create } from "zustand";
import { products } from "../utils/products";

export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

export interface IProductStore {
  products: IProduct[];
  createProduct: (product: IProduct) => void;
}

export const useProductStore = create<IProductStore>((set) => {
  return {
    products: products,
    createProduct: (product) =>
      set((state) => ({ products: [...state.products, product] })),
  };
});
