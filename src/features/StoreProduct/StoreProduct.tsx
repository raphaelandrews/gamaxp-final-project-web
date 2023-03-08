import { Link } from "react-router-dom";

import { formatCurrency } from "@/util";

import * as C from "./StoreProduct.styles";

type StoreProductProps = {
  id: number;
  product_name: string;
  description: string;
  price: number;
  photo: string;
  category_id: number;
}

export function StoreProduct({ id, product_name, price, photo, category_id }: StoreProductProps) {
  return (
    <C.ProductPreview>
      <C.ProductImage
        src={photo}
      />
      <C.ProductBox>
        <C.ProductTitle>{product_name}</C.ProductTitle>
        <C.ProductTitle>{category_id}</C.ProductTitle>
        <C.ProductPrice>{formatCurrency(price)}</C.ProductPrice>
        <C.ProductButton>
          <Link to={`/produto/${id}`}>
            Buy
          </Link>
        </C.ProductButton>
      </C.ProductBox>
    </C.ProductPreview>
  )
}
