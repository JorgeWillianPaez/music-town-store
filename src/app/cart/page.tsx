"use client";

import CartProducts from "@/components/CartProducts";
import Button from "@/components/Button";
import { useCartStore } from "@/store/cartStore";
import { DetailsContainer } from "./style";
import { toast } from "react-toastify";

export default function Cart() {
  const { totalPrice, cartProducts, updateTotalPrice, cleanCart } =
    useCartStore();
  const realCurrency = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const buy = () => {
    if (cartProducts.length === 0) {
      toast.error("Adicione produtos no carrinho");
    } else {
      cleanCart();
      updateTotalPrice();
      toast.success("Pedido realizado!");
    }
  };

  return (
    <>
      <CartProducts />
      <DetailsContainer>
        <h1>Total: {realCurrency.format(totalPrice)}</h1>
        <Button theme="light" onClick={buy}>
          Finalizar compra
        </Button>
      </DetailsContainer>
    </>
  );
}
