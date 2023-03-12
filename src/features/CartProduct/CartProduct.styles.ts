import styled from "styled-components";

interface CartProductProps {
    flexDirection?: string;
    alignItems?: string;
    gap?: string;
}

export const CartProductWrapper = styled.div<CartProductProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: ${(props) => props.gap ? props.gap :"2rem"};
    padding: 1rem;

    @media (min-width: 400px) {
       flex-direction: ${(props) => props.flexDirection ? props.flexDirection :"row"};
       align-items: ${(props) => props.alignItems ? props.alignItems :"center"};
    }
`

export const CartProductImg = styled.img`
    min-width: 4rem;
    max-width: 4rem;
    height: 4rem;
    border-radius: .75rem;
    object-fit: cover;
`

export const ProductContent = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const ProductInfo = styled.div`
    
`

export const ProductName = styled.span`
    font-size: var(--fs-5);
    font-weight: 500;
    margin-bottom: .25em;
`

export const ProductQuantity = styled.div`
    display: flex;
    gap: .25rem;
    margin-top: .25rem;
`

interface PriceProps {
    size?: string;
}

export const ProductPrice = styled.strong<PriceProps>`
    font-size: ${(props) => props.size};
`

interface ProductTotalProps {
    alignItems?: string;
}

export const ProductTotal = styled.div<ProductTotalProps>`
    display: flex;
    justify-content: space-between;
    align-items: ${(props) => props.alignItems ? props.alignItems :"flex-end"};
    width: 100%;
    gap: .5rem;
    @media (min-width: 400px) {
       flex-direction: column;
       width: inherit;
    }
`