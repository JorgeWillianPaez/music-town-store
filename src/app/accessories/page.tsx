"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import ProductCarousel from "@/components/ProductCarousel";
import { Container, HeaderContent, HeaderText } from "./style";
import Image from "next/image";
import AccessoriesImage from "../../../public/static/images/banner-acessorios.webp";

export default function Accessories() {
  return (
    <>
      <Header />
      <Container>
        <HeaderContent>
          <HeaderText>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque nisi orci, luctus vel nulla at, varius commodo arcu.
            </p>
            <Button>Encontre seu acessório</Button>
          </HeaderText>
          <Image
            src={AccessoriesImage.src}
            width={730}
            height={420}
            alt="Banner Acessórios"
            style={{
              width: "50%",
              borderRadius: "8px",
              border: "2px solid #ffffff",
            }}
          />
        </HeaderContent>
      </Container>
      <ProductCarousel name="Afinadores" />
      <ProductCarousel name="Correias" />
      <Footer />
    </>
  );
}
