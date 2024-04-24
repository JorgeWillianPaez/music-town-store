import { Container, Title, Line, Cards } from "./style";
import ProductCard from "../ProductCard";
import { IProduct, useProductStore } from "@/store/productStore";
import { useEffect, useState } from "react";

interface IProductCarouselProps {
  name: string;
}

export default function ProductCarousel(props: IProductCarouselProps) {
  const products = useProductStore((state) => state.products);

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const newProducts: IProduct[] = products.filter(
      (item) => item.category === props.name
    );
    setFilteredProducts(newProducts);
  });

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
          ></ProductCard>
        ))}
      </Cards>
    </Container>
  );
}
