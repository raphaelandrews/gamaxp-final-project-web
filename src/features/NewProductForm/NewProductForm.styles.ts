import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100vw;
    max-width: 100%;

    @media (min-width: 1000px) {
        flex-direction: row;
        gap: 8rem;
    }
    
    form {
        display: flex;
        flex-direction: column;
        width: 400px;
        max-width: 80%;
        margin-top: 2rem;
    }
`;

export const InputFile =styled.div`
    input {
        width: 100%;
    }
`

export const Message = styled.span`
    display: block;
    font-weight: 400;
    color: var(--third-color);
    margin-top: -.5em;
`

export const Button = styled.button`
    font-size: var(--fs-5);
    font-weight: 700;
    text-transform: uppercase;
    height: 3rem;
    border: 0px;
    border-radius: .25rem;
    background: #FFC107;
    cursor: pointer;
`

export const ImagePreview = styled.img`
    width: 20rem;
    height: auto;
    max-height: 500px;
    margin-top: 2rem;
`