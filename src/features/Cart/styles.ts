import styled from "styled-components";

export const CartWrapper = styled.section`
    padding-bottom: 4rem;
`

export const CartContent = styled.div`
    display: grid;
    gap: 2rem;
    margin: 2rem 0;
`

export const CartTotal = styled.div`
    
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
    padding-bottom: ${(props) => props.padding};
    border-bottom: ${(props) => props.border};
    margin-bottom: 1em;
`

export const CartSpan = styled.span`
    font-weight: 500;
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