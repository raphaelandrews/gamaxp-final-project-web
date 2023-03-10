import styled from "styled-components";

export const ProductPreview = styled.div`
    width: 100%;
    border-radius: .75rem;
    background-color: var(--bg-alt-color);
    box-shadow: 0 0 40px 0 rgb(94 92 154 / 6%);
`

export const ProductImage = styled.img`
    width: 100%;
    height: 180px;
    border-radius: .6rem .6rem 0 0;
    object-fit: cover;
`

export const ProductBox = styled.div`
    position: relative;
    padding: 1rem;
`

export const ProductTitle = styled.h2`
    font-size: var(--fs-7);
    font-weight: 500;
    margin-bottom: .5em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    min-height: 3rem;

    @media (min-width: 600px) {
        font-size: var(--fs-8);
    }
`

export const ProductPrice = styled.span`
    font-size: var(--fs-7);
    font-weight: 700;
`

export const ProductButton = styled.div`
    a {
        display: block;
        font-size: var(--fs-5);
        font-weight: 600;
        color: var(--bg-color);
        width: 100%;
        text-align: center;
        border-radius: .75rem;
        padding: 1rem .75rem;
        margin-top: 1em;
        background-color: var(--second-color);
        transition: .5s;
        cursor: pointer;

        &:hover {
            background-color: var(--second-color-alt);
        }

        @media (min-width: 600px) {
            font-size: var(--fs-6);
        }
    }
`