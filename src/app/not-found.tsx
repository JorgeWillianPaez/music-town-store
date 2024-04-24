"use client";

import { Container, Button } from "./style";
import { useRouter } from "next/navigation";
import ImageNotFound from "../../public/not-found.webp";
import Image from "next/image";

export default function NotFound() {
  const router = useRouter();

  return (
    <Container>
      <Image
        src={ImageNotFound.src}
        width={800}
        height={500}
        alt="Image Not Found"
      />
      <h2>Página não encontrada</h2>
      <Button onClick={() => router.push("/instruments")}>
        Voltar para Home
      </Button>
    </Container>
  );
}
