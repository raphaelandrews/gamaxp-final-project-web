import { useCart } from "@/context";
import { formatCurrency } from "@/util";

import * as C from "./CartProduct.styles";
import { Button } from "@/components";
import StoreProducts from "../../data/items.json";

type CartProductProps = {
  id: number
  quantity: number
  flexDirection?: string;
  alignItems?: string;
  gap?: string;
}

export function CartProduct(props: CartProductProps) {
  const { removeFromCart } = useCart()
  const item = StoreProducts.find(i => i.id === props.id)
  if (item == null) return null

  return (
    <C.CartProductWrapper flexDirection={props.flexDirection} alignItems="flex-start" gap="1rem">
      <C.ProductContent>
        <C.CartProductImg
          src={item.imgUrl}
        />
        <C.ProductInfo>
          <C.ProductName>
            {item.name}
          </C.ProductName>
          <C.ProductQuantity>
            {props.quantity >= 1 && (
              <span>
                x{props.quantity}
              </span>
            )}
            <C.ProductPrice>
              {formatCurrency(item.price)}
            </C.ProductPrice>
          </C.ProductQuantity>
        </C.ProductInfo>
      </C.ProductContent>
      <C.ProductTotal alignItems="flex-start">
        <Button
          action={() => removeFromCart(item.id)}
          display="flex"
          size=".75rem"
          padding=".5rem 1rem"
          backgroundColor="var(--third-color)"
          hoverBg="var(--third-color-alt)"
          text="Remover"
        />
      </C.ProductTotal>
    </C.CartProductWrapper >
  )
}
