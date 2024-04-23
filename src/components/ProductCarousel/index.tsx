import { Container, Title, Line, Cards } from "./style";
import ProductCard from "../ProductCard";

interface IProductCarouselProps {
  name: string;
}

export default function ProductCarousel(props: IProductCarouselProps) {
  return (
    <Container>
      <Title>{props.name}</Title>
      <Line />
      <Cards>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Cards>
    </Container>
  );
}
