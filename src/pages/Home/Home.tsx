import { useEffect, useState } from "react";
import axios from "axios";
import { SectionFilters } from "@/features";

import { G } from "@/styles";
import * as C from "./Home.styles";

import StoreProducts from "../../data/items.json";



export const Home = () => {
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
      <C.Banner>Banner</C.Banner>
      <SectionFilters products={data} />
    </G.Container>
  )
}
