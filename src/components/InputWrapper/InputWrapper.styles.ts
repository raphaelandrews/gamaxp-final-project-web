import styled from "styled-components";

interface InputWrapperProps {

}

export const InputWrapperDefault = styled.div`
    position: relative;

    input{
        font-size: var(--fs-5);
        color: var(--first-color);
        width: 100%;
        height: 3rem;
        padding: .75rem .875em;
        margin-top: .5em;
        border: 2px solid var(--first-color);
        border-radius: .5rem;
        background-color: var(--bg-color);
        cursor: pointer;

        ::-webkit-input-placeholder {
            font-size: inherit;
            color: var(--first-color);
            transition: opacity 0.2s ease, transform 0.2s ease;
            opacity: 0.4;
        }

        &:hover {
            border: 2px solid var(--second-color);
        }

        &:focus {
            border: 2px solid var(--second-color);
            //background-color: var(--first-color);
        }

        :focus::-webkit-input-placeholder {
            opacity: 0;
            transform: translateX(10px);
        }
    }
`
