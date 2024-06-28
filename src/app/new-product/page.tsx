"use client";

import { FormEvent } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useState } from "react";
import { IProduct, useProductStore } from "@/store/productStore";
import { FormContainer } from "./style";
import GibsonGuitar from "../../assets/new_guitar.png";
import MemphisBass from "../../assets/contrabaixo.jpg";
import { useRouter } from "next/navigation";

import { v4 as uuidv4 } from "uuid";

export default function NewProduct() {
  const { createProduct } = useProductStore();
  const router = useRouter();
  const [isActiveChecked, setIsActiveChecked] = useState(false);

  const [formData, setFormData] = useState<IProduct>({
    id: uuidv4(),
    name: "",
    category: "Guitarras",
    price: 0,
    image: GibsonGuitar.src,
    active: isActiveChecked,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "price") {
      setFormData({ ...formData, [name]: Number(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log(formData);
    createProduct(formData);
    router.push("/instruments");
  };

  return (
    <>
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
            onChange={(e) => {
              setFormData({ ...formData, category: e.target.value });
              if (e.target.value == "Guitarras") {
                setFormData({ ...formData, ["image"]: GibsonGuitar.src });
              } else {
                setFormData({ ...formData, ["image"]: MemphisBass.src });
              }
            }}
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
        <div className="flex-row justify-between">
          <label>Ativo:</label>
          <Input
            type="checkbox"
            name="active"
            value={formData.active}
            onChange={() => {
              setFormData({ ...formData, active: !formData.active });
            }}
            checked={formData.active}
          />
        </div>
        <Button onClick={handleSubmit} theme="light">
          Criar produto
        </Button>
      </FormContainer>
    </>
  );
}
