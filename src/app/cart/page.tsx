"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Container } from "./style";

export default function Cart() {
  return (
    <>
      <Header />
      <Container>Nenhum item adicionado ao carrinho!</Container>
      <Footer />
    </>
  );
}
