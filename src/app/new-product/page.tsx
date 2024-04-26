"use client";

import { FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useState } from "react";
import { IProduct, useProductStore } from "@/store/productStore";
import { FormContainer } from "./style";
import NewGuitarImage from "../../assets/new_guitar.png";
import { useRouter } from "next/navigation";

export default function NewProduct() {
  const { currentId, createProduct } = useProductStore();
  const router = useRouter();

  const [formData, setFormData] = useState<IProduct>({
    id: currentId,
    name: "",
    category: "Guitarras",
    price: 0,
    image: NewGuitarImage.src,
    addedToCart: false,
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    if (name === "price") {
      setFormData({ ...formData, [name]: Number(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    createProduct(formData);
    router.push("/instruments");
  };

  return (
    <>
      <Header />
      <h1 style={{ marginTop: "60px", textAlign: "center" }}>
        Insira as informações do novo produto
      </h1>
      <FormContainer>
        <div>
          <label>Nome:</label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Categoria:</label>
          <select
            name="category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value="Guitarras">Guitarra</option>
            <option value="Contrabaixos">Contrabaixo</option>
          </select>
        </div>
        <div>
          <label>Preço:</label>
          <Input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>

        <Button onClick={handleSubmit} theme="light">
          Criar produto
        </Button>
      </FormContainer>
      <Footer />
    </>
  );
}
