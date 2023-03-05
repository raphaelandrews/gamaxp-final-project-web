import { Cart } from "@/features";

import { G } from "@/styles";
import * as C from "./CartSummary.styles";

export const CartSummary = () => {
  return (
    <G.Container>
      <C.Title>Your Cart</C.Title>
      <Cart />
    </G.Container>
  )
}
