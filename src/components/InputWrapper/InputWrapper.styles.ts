import styled from "styled-components";

interface InputWrapperProps {

}

export const InputWrapperDefault = styled.div`
    position: relative;

    input{
        font-size: 1rem;
        color: var(--bg-color);
        width: 100%;
        height: 3rem;
        padding: 0px 1.25em;
        margin-top: .5em;
        border: 1px solid var(--bg-color);
        border-color: var(--bg-color);
        border-radius: .5rem;
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
