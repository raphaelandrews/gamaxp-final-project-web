import { useCart } from "@/context";
import { formatCurrency } from "@/util";
import { CartProduct } from "@/features";

import * as C from "./styles";
import { Button, ButtonDefault } from "@/components";
import StoreProducts from "../../data/items.json";
import { Link } from "react-router-dom";

type CartProps = {
  isOpen: boolean
}

export function Cart() {
  const { CartProducts } = useCart();

  function link() {
    return (
      <Link to="/checkout" />
    )
  }

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
          <C.CartSpan textAlign="right">
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

        <ButtonDefault
          width="100%"
          marginTop="1.25rem"
          backgroundColor="var(--second-color)"
          hoverBg="var(--second-color-alt)"
        >
          <Link to="/checkout">Continue to checkout</Link>
        </ButtonDefault>
      </C.CartTotal>

    </C.CartWrapper>
  )
}
