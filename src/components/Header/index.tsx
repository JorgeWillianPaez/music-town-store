"use client";

import { usePathname } from "next/navigation";
import { Container, NavLinks, StyledLink } from "./style";

export default function Header() {
  const pathname = usePathname();
  const isPathActive = (href: string) => pathname === href;

  return (
    <Container>
      <NavLinks>
        <StyledLink href="/instruments" active={isPathActive("/instruments")}>
          Instrumentos
        </StyledLink>
        <StyledLink href="/accessories" active={isPathActive("/accessories")}>
          Acessórios
        </StyledLink>
        <StyledLink href="/cart" active={isPathActive("/cart")}>
          Carrinho
        </StyledLink>
        <StyledLink href="/about" active={isPathActive("/about")}>
          Sobre
        </StyledLink>
        <StyledLink href="/my-account" active={isPathActive("/my-account")}>
          Minha conta
        </StyledLink>
      </NavLinks>
    </Container>
  );
}
