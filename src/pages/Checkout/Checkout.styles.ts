import styled from "styled-components";

export const CheckoutWrapper = styled.div`
    @media (min-width: 800px) {
        display: flex;
    }
`

export const CartContent = styled.div`
    display: grid;
    gap: 2rem;
    margin: 2rem 0;
    max-width: 400px;
    height: 100%;

    @media (min-width: 800px) {
        width: 50%;
        
    }
`