import React from 'react'
import { DeleteProductForm } from "@/features";
import { Link } from 'react-router-dom';

import { G } from "@/styles";
import * as C from "./DeleteProduct.styles";

export const DeleteProduct = () => {
  return (
    <G.Container>
      <C.LinkWrapper>
        <Link to="/dashboard">
          <svg xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none">
            <path
              stroke="var(--alt-color)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08">
            </path>
          </svg>back</Link>
      </C.LinkWrapper>
      <C.Title>Deletar Produto</C.Title>
      <DeleteProductForm />
    </G.Container>
  )
}