import { useCart } from "@/context";
import { formatCurrency } from "@/util";

import * as C from "./styles";
import { Button } from "@/components";
import StoreProducts from "../../data/items.json";

type CartProductProps = {
  id: number
  quantity: number
}


export function CartProduct({ id, quantity }: CartProductProps) {
  const { removeFromCart } = useCart()
  const item = StoreProducts.find(i => i.id === id)
  if (item == null) return null

  return (
    <C.CartProductWrapper>
      <C.ProductContent>
        <C.CartProductImg
          src={item.imgUrl}
        />
        <C.ProductInfo>
          <C.ProductName>
            {item.name}
          </C.ProductName>
          <C.ProductQuantity>
            {quantity >= 1 && (
              <span>
                x{quantity}
              </span>
            )}
            <C.ProductPrice>
              {formatCurrency(item.price)}
            </C.ProductPrice>
          </C.ProductQuantity>
        </C.ProductInfo>
      </C.ProductContent>
      <C.ProductTotal>
        <C.ProductPrice size="1.25rem"> {formatCurrency(item.price * quantity)}</C.ProductPrice>
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
