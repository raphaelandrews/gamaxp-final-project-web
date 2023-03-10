import { Cart } from "@/features";

import { Container } from "@/components";
import { Title } from "@/components";

export const CartSummary = () => {
  return (
    <Container>
      <>
      <Title text="Your Cart" />
      <Cart price={10} />
      </>
    </Container>
  )
}
