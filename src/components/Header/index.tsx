"use client";

import { usePathname } from "next/navigation";
import {
  Container,
  MobileNav,
  NavLinks,
  StyledLink,
  MobileNavLinks,
  CloseHamburgerMenu,
} from "./style";
import HamburgerMenu from "../../assets/menu-hamburguer.png";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const isPathActive = (href: string) => pathname === href;

  const [menuActive, setMenuActive] = useState<boolean>(false);

  return (
    <Container>
      <MobileNav>
        {menuActive ? (
          <CloseHamburgerMenu onClick={() => setMenuActive(false)}>
            X
          </CloseHamburgerMenu>
        ) : (
          <Image
            src={HamburgerMenu.src}
            width={80}
            height={80}
            alt="Menu Hamburguer"
            onClick={() => setMenuActive(true)}
          />
        )}

        <MobileNavLinks active={menuActive}>
          <StyledLink href="/instruments" active={isPathActive("/instruments")}>
            Instrumentos
          </StyledLink>
          <StyledLink href="/new-product" active={isPathActive("/new-product")}>
            Novo produto
          </StyledLink>
          <StyledLink href="/products" active={isPathActive("/products")}>
            Produtos
          </StyledLink>
          <StyledLink href="/cart" active={isPathActive("/cart")}>
            Carrinho
          </StyledLink>
          {/* <StyledLink href="/my-account" active={isPathActive("/my-account")}>
            Minha conta
          </StyledLink> */}
        </MobileNavLinks>
      </MobileNav>
      <NavLinks>
        <StyledLink href="/instruments" active={isPathActive("/instruments")}>
          Instrumentos
        </StyledLink>
        <StyledLink href="/new-product" active={isPathActive("/new-product")}>
          Novo produto
        </StyledLink>
        <StyledLink href="/products" active={isPathActive("/products")}>
          Produtos
        </StyledLink>
        <StyledLink href="/cart" active={isPathActive("/cart")}>
          Carrinho
        </StyledLink>
        {/* <StyledLink href="/my-account" active={isPathActive("/my-account")}>
          Minha conta
        </StyledLink> */}
      </NavLinks>
    </Container>
  );
}
