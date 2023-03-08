import { useEffect, useState } from "react";
import { ProductGallery } from "@/features";
import axios from "axios";

import { G } from "@/styles";
import * as C from "./Products.styles";

export const Products = () => {
  const [data, setData] = useState([])

  async function getData() {
    const res = await axios.get(`${import.meta.env.VITE_API_HOST}/produto`);
    setData(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <G.Container>
      <C.Title>Livros</C.Title>
      <ProductGallery products={data} productsPerPage={12} />
    </G.Container>
  )
}
