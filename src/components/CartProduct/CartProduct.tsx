import { useCart } from "../../context/CartContext"
import StoreProducts from "../../data/items.json"
import { formatCurrency } from "../../util/formatCurrency"
import * as C from "./styles";

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
        <button
          onClick={() => removeFromCart(item.id)}
        >
          &times;
        </button>
      </C.ProductTotal>
    </C.CartProductWrapper>
  )
}
