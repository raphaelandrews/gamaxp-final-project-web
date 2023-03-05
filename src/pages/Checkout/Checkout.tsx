import { useCart } from "@/context";
import { CartProduct } from "@/features";
import { MultiStepForm } from "@/features";

import  { G } from "@/styles";
import * as C from "./Checkout.styles";

export const Checkout = () => {
  const { CartProducts } = useCart();
  return (
    <G.Container>
      <C.Title>Checkout</C.Title>
      <MultiStepForm />
      <C.CartContent>
        {CartProducts.map(item => (
          <CartProduct key={item.id} {...item} />
        ))}
      </C.CartContent>
    </G.Container>
  )
}
