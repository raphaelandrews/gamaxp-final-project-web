import React from 'react'
import { Cart } from '../../components/Cart/Cart'
import * as C from "../../styles/global"
import * as S from "./styles"

const Checkout = () => {
  return (
    <C.Container>
      <S.CheckoutTitle>Your Cart</S.CheckoutTitle>
      <Cart isOpen={false} />
    </C.Container>
  )
}

export default Checkout