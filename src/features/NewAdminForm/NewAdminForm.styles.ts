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

export const FormInputs = styled.section`
    display: grid;
    grid-auto-flow: row;
    gap: 1rem;

    a {
        font-weight: 400;
        text-align: center;
        color: var(--alt-color);
        margin-top: .5rem;
        transition: .5s;

        span {
            font-weight: 700;
        }

        &:hover {
            text-decoration: underline;
        }
    }
`

export const InputWrapper = styled.div`
    position: relative;

    svg {
        position: absolute;
        top: 50%;
        left: 1rem;
        font-size: var(--fs-4);
        transform: translateY(-50%);
    }

    input{
        font-size: var(--fs-5);
        color: var(--bg-color);
        width: 100%;
        height: 3rem;
        padding: 0px 1em 0px 2.65em;
        border: 1px solid var(--bg-color);
        border-color: var(--bg-color);
        border-radius: .25rem;
        background-color: var(--alt-color);
        cursor: pointer;

        ::-webkit-input-placeholder {
            font-size: inherit;
            color: inherit;
            transition: opacity 0.2s ease, transform 0.2s ease;
            opacity: 0.4;
        }

        &:hover {
            border: 1px solid var(--second-color);
        }

        &:focus {
            border: 1px solid var(--second-color);
            background-color: var(--first-color);
        }

        :focus::-webkit-input-placeholder {
            opacity: 0;
            transform: translateX(10px);
        }
    }
`

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

export const Span = styled.span`
    
`

export const ImagePreview = styled.img`
    width: 20rem;
    height: auto;
    max-height: 500px;
    margin-top: 2rem;
`