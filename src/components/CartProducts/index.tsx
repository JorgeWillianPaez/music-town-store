import Image from "next/image";
import {
  Container,
  ProductContainer,
  ProductDetails,
  RemoveProductButton,
} from "./style";
import { useCartStore } from "@/store/cartStore";
import GuitarImage from "../../assets/gibson_blueberry.webp";
import Trash from "../../assets/trash.png";

export default function CartProducts() {
  const { cartProducts } = useCartStore();

  const realCurrency = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Container cartHasItems={cartProducts.length > 0}>
      {cartProducts.length > 0 ? (
        cartProducts.map((product, index) => (
          <ProductContainer key={index}>
            <Image
              src={GuitarImage.src}
              width={90}
              height={90}
              alt="Imagem do Produto"
            />
            <ProductDetails>
              <div>
                <p>Produto: {product.name}</p>
                <p>Preço unitário: {realCurrency.format(product.price)}</p>
              </div>
              <RemoveProductButton>
                <Image
                  src={Trash.src}
                  width={35}
                  height={35}
                  alt="Remove Product"
                />
              </RemoveProductButton>
            </ProductDetails>
          </ProductContainer>
        ))
      ) : (
        <p>Nenhum item adicionado ao carrinho!</p>
      )}
    </Container>
  );
}
