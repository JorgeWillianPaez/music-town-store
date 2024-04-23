"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Container } from "./style";
import Input from "@/components/Input";

export default function MyAccount() {
  return (
    <>
      <Header />
      <Container>
        <Input label="Nome de usuário" type="text" />
        <Input label="E-mail" type="text" />
      </Container>
      <Footer />
    </>
  );
}
