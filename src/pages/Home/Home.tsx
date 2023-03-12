import { useEffect, useState } from "react";
import axios from "axios";
import { Banner, SectionFilters } from "@/features";

import { Container } from "@/components";
import * as C from "./Home.styles";

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
    <>
      <C.Banner>
        <Banner />
      </C.Banner>
      <Container>
        <>

          <SectionFilters products={data} />
        </>
      </Container>
    </>
  )
}
