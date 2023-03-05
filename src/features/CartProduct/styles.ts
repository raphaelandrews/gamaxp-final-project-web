import styled from "styled-components";

export const CartProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
    padding: 1rem;

    @media (min-width: 400px) {
       flex-direction: row;
       align-items: center;
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
    font-size: 1rem;
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

export const ProductTotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    gap: .5rem;
    @media (min-width: 400px) {
       flex-direction: column;
       width: inherit;
    }
`