import { useCart } from "@/context";
import { CartProduct } from "@/features";
import { MultiStepForm } from "@/features";

import { Container } from "@/components";
import * as C from "./Checkout.styles";
import { Title } from "@/components";

export const Checkout = () => {
  const { CartProducts } = useCart();

  return (
    <Container>
      <>
        <Title text="Checkout" />
        <MultiStepForm />
        <C.CartContent>
          {CartProducts.map(item => (
            <CartProduct key={item.id} {...item} />
          ))}
        </C.CartContent>
      </>
    </Container>
  )
}
