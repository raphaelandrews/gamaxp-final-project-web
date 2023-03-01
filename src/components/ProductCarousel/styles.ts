import styled from "styled-components";

export const ProductContainer = styled.section`
     @media (min-width: 800px) {
        display: flex;
        margin-top: 4rem;
    }
`

export const ProductContent = styled.div`

`

export const ProducImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
`

export const ProductImg = styled.img`
    width: 60%;
    margin-top: 2rem;
    aspect-ratio: 4/5;
    //object-fit: cover;
    @media (min-width: 800px) {
        margin-top: 0;
    }
`

export const ProductTitle = styled.h2`
    font-size: 2rem;
    margin-bottom: .5em;
`

export const ProductPrice = styled.span`
    font-size: 1.5rem;
`

export const ProductDescription = styled.p`
    margin-top: 1em;
`

export const ProductButton = styled.button`
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    color: hsl(0, 0%, 100%);
    width: 100%;
    border: none;
    background-color: hsl(45, 100%, 51%);
    padding: .75em 1em;
    margin: 2rem 0 8rem;
    transition: .5s;

    &:hover {
        background-color: hsl(45, 100%, 45%);
        cursor: pointer;
    }
`