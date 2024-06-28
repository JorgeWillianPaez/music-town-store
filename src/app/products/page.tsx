"use client";

import { useProductStore } from "@/store/productStore";
import { useEffect } from "react";
import Input from "@/components/Input";
import { Table } from "react-bootstrap";
import DeleteImg from "../../assets/trash.png";

export default function Products() {
  const { products, getAllProducts, deleteProduct } = useProductStore();

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Ativo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <Input
                  type="checkbox"
                  name="active"
                  value={item.active}
                  checked={item.active}
                />
              </td>
              <td>
                <button
                  className="border-0 bg-transparent"
                  onClick={() => deleteProduct(item.id)}
                >
                  <img
                    src={DeleteImg.src}
                    width={30}
                    height={30}
                    alt="ImagemDeleção"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
