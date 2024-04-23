"use client";

import Link from "next/link";
import { Container } from "./style";

export default function NotFound() {
  return (
    <Container>
      <h2>Página não encontrada</h2>
      <Link href="/instruments">Return Home</Link>
    </Container>
  );
}
