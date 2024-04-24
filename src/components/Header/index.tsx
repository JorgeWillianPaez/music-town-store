"use client";

import { usePathname } from "next/navigation";
import {
  Container,
  MobileNav,
  NavLinks,
  StyledLink,
  MobileNavLinks,
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
          <button onClick={() => setMenuActive(false)}>X</button>
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
        </MobileNavLinks>
      </MobileNav>
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
