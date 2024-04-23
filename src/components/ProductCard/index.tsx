import Image from "next/image";
import { AddCart, Container, Description, Value } from "./style";
import GibsonBlueberry from "../../../public/static/images/gibson_blueberry.webp";

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
      <Description>Descrição</Description>
      <Value>R$ Valor</Value>
      <AddCart>Adicionar ao carrinho</AddCart>
    </Container>
  );
}
