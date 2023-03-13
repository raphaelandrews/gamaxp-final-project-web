import styled from "styled-components";

export const ProductContainer = styled.section`
    @media (min-width: 800px) {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-top: 4rem;
    }
`

export const ProductContent = styled.div`
    max-width: 500px;
    margin: 2rem auto 0;
    @media (min-width: 800px) {
        width: 50%;
        margin: 0 auto;
    }
`

export const ProducImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
    @media (min-width: 800px) {
        width: 50%;
    }
`

export const ProductImg = styled.img`
    width: 80%;
    max-width: 400px;
    margin-top: 2rem;
    aspect-ratio: 4/5;
    border-radius: .75rem;
    //object-fit: cover;
    @media (min-width: 800px) {
        margin-top: 0;
    }
`

export const ProductTitle = styled.h2`
    font-size: var(--fs-10);
    margin-bottom: .25em;
    @media (min-width: 800px) {
        font-size: var(--fs-12);
    }
`

export const ProductPrice = styled.span`
    display: block;
    font-size: var(--fs-8);
    margin-bottom: 1em;
    @media (min-width: 800px) {
        font-size: var(--fs-10);
    }
`

export const ProductDescription = styled.p`
    font-weight: 400;
    line-height: 1.5em;
    color: var(--alt-color);
    margin-top: 1em;
`

interface ButtonProps {
    backgroundColor?: string
    margin?: string;
    width?: string;
    padding?: string;
    hoverBg?: string
}

export const ProductButton = styled.button<ButtonProps>`
    font-size: var(--fs-5);
    font-weight: 600;
    color: var(--first-color);
    width: ${(props) => props.width};
    border-radius: .75rem;
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
    border: none;
    background-color: ${(props) => props.backgroundColor};
    transition: .5s;
    cursor: pointer;

    &:hover {
        background-color:  ${(props) => props.hoverBg};
    }
`

export const ProductButtons = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 2em;
`

export const QuantityButtons = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    padding: .5rem 1.25rem;
    border-radius: .75rem;
    background-color: var(--bg-alt-color);
`