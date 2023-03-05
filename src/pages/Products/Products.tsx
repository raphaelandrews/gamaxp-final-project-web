import { ProductGallery } from "@/features";

import { G } from "@/styles";
import * as C from "./Products.styles";

import StoreProducts from "../../data/items.json";

export const Products = () => {
  return (
    <G.Container>
      <C.Title>Livros</C.Title>
      <ProductGallery products={StoreProducts} productsPerPage={12} />
    </G.Container>
  )
}
