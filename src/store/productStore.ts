import { create } from "zustand";
import axios from "axios";
import { toast } from "react-toastify";

export interface IProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  active: boolean;
}

export interface IProductStore {
  products: IProduct[];
  activeProducts: IProduct[];
  createProduct: (product: IProduct) => void;
  getAllProducts: () => void;
  getActiveProducts: () => void;
  deleteProduct: (id: string) => void;
}

export const useProductStore = create<IProductStore>((set) => {
  return {
    currentId: 17,
    products: [],
    activeProducts: [],
    createProduct: (product) => {
      axios.post("http://localhost:4000/api/product", product).then(() => {
        set((state) => ({ products: [...state.products, product] }));
      });
    },
    getAllProducts: () => {
      axios.get("http://localhost:4000/api/product").then((res) => {
        set(() => ({ products: res.data }));
      });
    },
    getActiveProducts: () => {
      axios.get("http://localhost:4000/api/product/active").then((res) => {
        set(() => ({ activeProducts: res.data }));
      });
    },
    deleteProduct: (id: string) => {
      console.log(id);
      axios
        .delete(`http://localhost:4000/api/product/${id}`)
        .then(() =>
          set((state) => ({
            products: state.products.filter((item) => item.id === id),
          }))
        )
        .then(() => toast.success("Produto deletado com sucesso!"))
        .catch(() => toast.error("Erro ao deletar o produto!"));
    },
  };
});
