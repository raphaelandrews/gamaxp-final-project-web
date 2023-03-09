import styled from "styled-components";

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 1rem;
    margin: 2rem 0;
`

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
        font-size: .875rem;
        transform: translateY(-50%);
        fill: var(--bg-alt-color);
    }

    input{
        font-size: 1rem;
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

export const InputWrapperRadio = styled.div`
    display: flex;
    gap: 1rem;
    padding: 1rem;
    margin-bottom: 1rem;
`

export const Button = styled.button`
    font-size: 1rem;
    font-weight: 700;
    height: 3rem;
    border: 0px;
    border-radius: .25rem;
    background: #FFC107;
    cursor: pointer;
`
