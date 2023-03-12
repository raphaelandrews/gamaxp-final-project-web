import styled from "styled-components";

export const CartContent = styled.div`
    display: grid;
    gap: 2rem;
    width: 100%;
`

export const CartTotal = styled.div`
    width: 100%;
    padding-top: 4rem;

    @media (min-width: 800px) {
        padding-top: .5rem;
    }
`

export const CartSummary = styled.h2`
    font-size: var(--fs-8);
    margin-bottom: 1em;

    @media (min-width: 800px) {
        font-size: var(--fs-9);
    }
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
    font-size: var(--fs-6);
    font-weight: 500;
    text-align: ${(props) => props.textAlign ?  props.textAlign : "left"};
`

export const CartButton = styled.button`
    font-size: var(--fs-5);
    font-weight: 700;
    width: 100%;
    padding: 1em .75em;
    border: 0;
    border-radius: 1rem;
    margin-top: 2rem;
`