"use client";

import { FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useState } from "react";
import { IProduct, useProductStore } from "@/store/productStore";
import { FormContainer } from "./style";
import NewGuitarImage from "../../assets/gibson_blueberry.webp";

export default function NewProduct() {
  const { currentId, createProduct } = useProductStore();

  const realCurrency = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  });

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

    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(formData);

    createProduct(formData);
  };

  return (
    <>
      <Header />
      <h1 style={{ marginTop: "20px" }}>
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
