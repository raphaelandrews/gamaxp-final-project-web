import React from 'react'
import { Cart } from '../../components/Cart/Cart'
import * as G from "../../styles/GlobalStyles"
import * as C from "./styles"

const CartSummary = () => {
  return (
    <G.Container>
      <C.Title>Your Cart</C.Title>
      <Cart />
    </G.Container>
  )
}

export default CartSummary;