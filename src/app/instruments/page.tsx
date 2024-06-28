"use client";

import ProductCarousel from "@/components/ProductCarousel";
import {
  Container,
  HeaderContent,
  HeaderText,
  InstrumentsImageTag,
} from "./style";
import InstrumentsImage from "../../assets/banner-instrumentos.webp";

export default function Instruments() {
  return (
    <>
      <Container>
        <HeaderContent>
          <HeaderText>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque nisi orci, luctus vel nulla at, varius commodo arcu.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque nisi orci, luctus vel nulla at, varius commodo arcu.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque nisi orci, luctus vel nulla at, varius commodo arcu.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque nisi orci, luctus vel nulla at, varius commodo arcu.
            </p>
          </HeaderText>
          <InstrumentsImageTag
            src={InstrumentsImage.src}
            width={730}
            height={420}
            alt="Banner Instrumentos"
            style={{
              width: "50%",
              height: "100%",
              borderRadius: "8px",
              border: "2px solid #ffffff",
            }}
          />
        </HeaderContent>
      </Container>
      <ProductCarousel name="Guitarras" />
      <ProductCarousel name="Contrabaixos" />
    </>
  );
}
