import styled from "styled-components";

export const CartWrapper = styled.section`
    padding-bottom: 4rem;
    margin-top: 2rem;
    @media (min-width: 800px) {
        display: flex;
        justify-content: space-between;
        gap: 8rem;
    }
`

export const CartContent = styled.div`
    display: grid;
    gap: 2rem;
    width: 100%;
`

export const CartTotal = styled.div`
    width: 100%;
    padding-top: 4rem;

    @media (min-width: 800px) {
        padding-top: 1rem;
    }
`

export const CartSummary = styled.h2`
    font-size: 1.25rem;
    margin-bottom: 1em;
`

interface SubtotalProps {
    padding?: string
    border?: string;
}

export const CartSubtotal = styled.div<SubtotalProps>`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding-bottom: ${(props) => props.padding};
    border-bottom: ${(props) => props.border};
    margin-bottom: 1em;
`

interface CartSpanProps {
    textAlign?: string;
}

export const CartSpan = styled.span<CartSpanProps>`
    font-weight: 500;
    text-align: ${(props) => props.textAlign ?  props.textAlign : "left"};
`

export const CartButton = styled.button`
    font-size: 1rem;
    font-weight: 700;
    width: 100%;
    padding: 1em .75em;
    border: 0;
    border-radius: 1rem;
    margin-top: 2rem;
`