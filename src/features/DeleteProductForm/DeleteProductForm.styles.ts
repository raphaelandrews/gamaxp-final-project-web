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
`;

export const FormInputs = styled.section`
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


export const Span = styled.span`
    
`