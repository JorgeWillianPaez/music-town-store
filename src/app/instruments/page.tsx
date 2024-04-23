"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCarousel from "@/components/ProductCarousel";
import { Container, HeaderContent, HeaderText } from "./style";
import Image from "next/image";
import InstrumentsImage from "../../../public/static/images/banner-instrumentos.webp";
import Button from "@/components/Button";

export default function Instruments() {
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
            <Button>Encontre seu instrumento</Button>
          </HeaderText>
          <Image
            src={InstrumentsImage.src}
            width={730}
            height={420}
            alt="Banner Instrumentos"
            style={{
              width: "50%",
              borderRadius: "8px",
              border: "2px solid #ffffff",
            }}
          />
        </HeaderContent>
      </Container>
      <ProductCarousel name="Guitarras" />
      <ProductCarousel name="Contrabaixos" />
      <Footer />
    </>
  );
}
