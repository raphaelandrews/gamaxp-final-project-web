import { Link } from 'react-router-dom';

import { EditProductForm } from "@/features";
import { Container, Title } from "@/components";

import * as C from "./EditProduct.styles";
import { ArrowLeft } from '@/assets/svg';

export const EditProduct = () => {
    return (
        <Container>
            <>
                <C.LinkWrapper>
                    <Link to="/dashboard">
                        <ArrowLeft width='20px' height='20px' color='var(--first-color)' />
                        back
                    </Link>
                </C.LinkWrapper>
                <Title text="Atualizar Produto" margin="4rem 0 0 0" />
                <EditProductForm />
            </>
        </Container>
    )
}
