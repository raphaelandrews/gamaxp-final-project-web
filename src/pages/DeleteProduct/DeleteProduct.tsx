import { Link } from 'react-router-dom';

import { DeleteProductForm } from "@/features";
import { Container, Title } from "@/components";

import * as C from "./DeleteProduct.styles";
import { ArrowLeft } from '@/assets/svg';

export const DeleteProduct = () => {
  return (
    <Container>
      <>
        <C.LinkWrapper>
          <Link to="/dashboard">
            <ArrowLeft width='20px' height='20px' color='var(--first-color)'/>
            back</Link>
        </C.LinkWrapper>
        <Title text="Deletar Produto" margin="4rem 0 0 0" />
        <DeleteProductForm />
      </>
    </Container>
  )
}