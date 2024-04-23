"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCarousel from "@/components/ProductCarousel";
import { Container } from "./style";

export default function Instruments() {
  return (
    <>
      <Header />
      <Container></Container>
      <ProductCarousel name="Guitarras" />
      <ProductCarousel name="Contrabaixos" />
      <Footer />
    </>
  );
}
