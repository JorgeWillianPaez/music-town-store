"use client";

import Image from "next/image";
import { AddCart, Container, Description, Value } from "./style";
import GibsonBlueberry from "../../assets/gibson_blueberry.webp";
import { toast } from "react-toastify";
import { IProduct, useProductStore } from "@/store/productStore";
import { useCartStore } from "@/store/cartStore";

export default function ProductCard(props: IProduct) {
  const { addProduct, updateTotalPrice } = useCartStore();

  const addProductToCart = () => {
    addProduct({
      id: props.id,
      name: props.name,
      category: props.category,
      price: props.price,
      image: props.image,
      addedToCart: true,
    });
    updateTotalPrice();
    toast.success("Produto adicionado ao carrinho!");
  };

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
      <AddCart onClick={addProductToCart}>Adicionar ao carrinho</AddCart>
    </Container>
  );
}
