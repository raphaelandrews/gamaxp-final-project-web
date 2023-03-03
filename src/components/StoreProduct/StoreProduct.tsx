import { Link } from "react-router-dom";
import { formatCurrency } from "../../util/formatCurrency";
import * as C from "./styles";

type StoreProductProps = {
  id: number
  name: string
  description: string;
  price: number
  imgUrl: string
}

export function StoreProduct({ id, name, description, price, imgUrl }: StoreProductProps) {
  return (
    <C.ProductPreview>
      <C.ProductImage
        src={imgUrl}
      />
      <C.ProductBox>
        <C.ProductTitle>{name}</C.ProductTitle>
        <C.ProductPrice>{formatCurrency(price)}</C.ProductPrice>
        <C.ProductButton>
          <Link to="/products">
          Comprar
          </Link>
        </C.ProductButton>
      </C.ProductBox>
    </C.ProductPreview>
  )
}
