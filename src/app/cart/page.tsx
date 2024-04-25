"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartProducts from "@/components/CartProducts";
import Button from "@/components/Button";
import { useCartStore } from "@/store/cartStore";
import { DetailsContainer } from "./style";

export default function Cart() {
  const { totalPrice } = useCartStore();
  const realCurrency = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <>
      <Header />
      <CartProducts />
      <DetailsContainer>
        <h1>Total: {realCurrency.format(totalPrice)}</h1>
        <Button theme="light">Finalizar compra</Button>
      </DetailsContainer>
      <Footer />
    </>
  );
}
