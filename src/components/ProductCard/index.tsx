"use client";

import Image from "next/image";
import { AddCart, Container, Description, Value } from "./style";
import GibsonBlueberry from "../../assets/gibson_blueberry.webp";
import { toast } from "react-toastify";
import { IProduct } from "@/store/productStore";

export default function ProductCard(props: IProduct) {
  return (
    <Container>
      <Image
        src={GibsonBlueberry.src}
        width={250}
        height={250}
        alt="Gibson Blueberry"
        style={{ borderRadius: "8px", marginTop: "10px" }}
      />
      <Description>{props.name}</Description>
      <Value>R$ {props.price}</Value>
      <AddCart onClick={() => toast.success("Produto adicionado ao carrinho!")}>
        Adicionar ao carrinho
      </AddCart>
    </Container>
  );
}
