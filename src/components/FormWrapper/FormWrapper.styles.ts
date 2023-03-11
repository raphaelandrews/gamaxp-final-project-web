import styled from "styled-components";

interface FormWrapperProps {

}

export const FormWrapperDefault = styled.section`
    display: grid;
    grid-auto-flow: row;
    gap: 1.25rem;

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