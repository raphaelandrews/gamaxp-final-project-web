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
  category: any;
}

export function StoreProduct({ id, product_name, price, photo }: StoreProductProps) {
  const productImg = `src/assets/img/${photo}`

  return (
    <C.ProductPreview>
      <C.ProductImage
        src={productImg}
      />
      <C.ProductBox>
        <C.ProductTitle>{product_name}</C.ProductTitle>
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
