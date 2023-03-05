import { Link } from "react-router-dom";

import { formatCurrency } from "@/util";

import * as C from "./StoreProduct.styles";

type StoreProductProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  category: string;
}

export function StoreProduct({ id, name, price, imgUrl }: StoreProductProps) {
  return (
    <C.ProductPreview>
      <C.ProductImage
        src={imgUrl}
      />
      <C.ProductBox>
        <C.ProductTitle>{name}</C.ProductTitle>
        <C.ProductPrice>{formatCurrency(price)}</C.ProductPrice>
        <C.ProductButton>
          <Link to={`/product/${id}`}>
          Comprar
          </Link>
        </C.ProductButton>
      </C.ProductBox>
    </C.ProductPreview>
  )
}
