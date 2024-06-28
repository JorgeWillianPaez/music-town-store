"use client";

import { Container, Title, Line, Cards } from "./style";
import ProductCard from "../ProductCard";
import { IProduct, useProductStore } from "@/store/productStore";
import { useEffect, useState } from "react";

interface IProductCarouselProps {
  name: string;
}

export default function ProductCarousel(props: IProductCarouselProps) {
  const { activeProducts, getActiveProducts } = useProductStore();

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getActiveProducts();
  }, []);

  useEffect(() => {
    const newProducts: IProduct[] = activeProducts.filter(
      (item) => item.category === props.name
    );
    setFilteredProducts(newProducts);
  }, [activeProducts]);

  return (
    <Container>
      <Title>{props.name}</Title>
      <Line />
      <Cards>
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            name={product.name}
            category={product.category}
            image={product.image}
            price={product.price}
            active={product.active}
          ></ProductCard>
        ))}
      </Cards>
    </Container>
  );
}
