"use client";

import Link from "next/link";
import "./style.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isPathActive = (href: string) => pathname === href;

  return (
    <div className="container">
      <Link
        href="/instruments"
        className={
          isPathActive("/instruments") ? "active-link" : "standard-link"
        }
      >
        Instrumentos
      </Link>
      <Link
        href="/accessories"
        className={
          isPathActive("/accessories") ? "active-link" : "standard-link"
        }
      >
        Acessórios
      </Link>
      <Link
        href="/cart"
        className={isPathActive("/cart") ? "active-link" : "standard-link"}
      >
        Carrinho
      </Link>
      <Link
        href="/about"
        className={isPathActive("/about") ? "active-link" : "standard-link"}
      >
        Sobre
      </Link>
      <Link
        href="/my-account"
        className={
          isPathActive("/my-account") ? "active-link" : "standard-link"
        }
      >
        Minha conta
      </Link>
    </div>
  );
}
