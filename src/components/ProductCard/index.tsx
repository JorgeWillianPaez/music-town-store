"use client";

import Image from "next/image";
import { AddCart, Container, Description, Value } from "./style";
import GibsonBlueberry from "../../../public/static/images/gibson_blueberry.webp";
import { toast } from "react-toastify";

export default function ProductCard() {
  return (
    <Container>
      <Image
        src={GibsonBlueberry.src}
        width={250}
        height={250}
        alt="Gibson Blueberry"
        style={{ borderRadius: "8px", marginTop: "10px" }}
      />
      <Description>
        Guitarra Gibson Les Paul Standard 60s - Blueberry Burst
      </Description>
      <Value>R$ 38.990,00</Value>
      <AddCart onClick={() => toast.success("Produto adicionado ao carrinho!")}>
        Adicionar ao carrinho
      </AddCart>
    </Container>
  );
}
