import { useEffect, useState } from "react";
import axios from "axios";

import { ProductGallery } from "@/features";
import { Container, Title } from "@/components";

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
    <Container>
      <>
        <Title text="Books" />
        <ProductGallery products={data} productsPerPage={12} />
      </>
    </Container>
  )
}
