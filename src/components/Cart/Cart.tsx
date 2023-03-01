import { useCart } from "../../context/CartContext"
import { formatCurrency } from "../../util/formatCurrency"
import { CartProduct } from "../CartProduct/CartProduct"
import StoreProducts from "../../data/items.json"

import * as C from "./styles"

type CartProps = {
  isOpen: boolean
}

export function Cart({ isOpen }: CartProps) {
  const { closeCart, CartProducts } = useCart();

  return (
    <C.CartWrapper>
      <C.CartContent>
        {CartProducts.map(item => (
          <CartProduct key={item.id} {...item} />
        ))}
      </C.CartContent>
      <C.CartTotal>
        <C.CartSummary>Order Summary</C.CartSummary>
        <C.CartSubtotal>
          <C.CartSpan>Subtotal</C.CartSpan>
          <C.CartSpan>
            {formatCurrency(
              CartProducts.reduce((total, CartProduct) => {
                const item = StoreProducts.find(i => i.id === CartProduct.id)
                return total + (item?.price || 0) * CartProduct.quantity
              }, 0)
            )}
          </C.CartSpan>
        </C.CartSubtotal>

        <C.CartSubtotal border="1px solid" padding="1rem">
          <C.CartSpan>Shipping</C.CartSpan>
          <C.CartSpan>
            Calculated at the next step
          </C.CartSpan>
        </C.CartSubtotal>
        <C.CartSubtotal>
          <C.CartSpan>Total</C.CartSpan>
          <C.CartSpan>
            {formatCurrency(
              CartProducts.reduce((total, CartProduct) => {
                const item = StoreProducts.find(i => i.id === CartProduct.id)
                return total + (item?.price || 0) * CartProduct.quantity
              }, 0)
            )}
          </C.CartSpan>
        </C.CartSubtotal>
      </C.CartTotal>
      <C.CartButton>
        Continue to checkout
      </C.CartButton>
    </C.CartWrapper>
  )
}
