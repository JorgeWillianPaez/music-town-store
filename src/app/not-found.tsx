"use client";

import { Container, Button, Content } from "./style";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <Container>
      <Content>
        <h2>Página não encontrada</h2>
        <Button onClick={() => router.push("/instruments")}>
          Voltar para Home
        </Button>
      </Content>
    </Container>
  );
}
