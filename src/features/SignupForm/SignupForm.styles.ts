import styled from "styled-components";

export const Title = styled.h1`
    font-size: var(--fs-10);
    font-weight: 700;
    margin-bottom: 1em;
    @media (min-width: 800px) {
        font-size: var(--fs-12);
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    max-width: 100%;
    min-height: calc(80vh - 4rem);
    @media (min-width: 800px) {
        min-height: calc(80vh - 5rem);
    }
    
    form {
        display: flex;
        flex-direction: column;
        width: 480px;
        max-width: 80%;
        border-radius: .25rem;
    }
`;

export const Message = styled.span`
    display: block;
    font-weight: 400;
    color: var(--third-color);
    margin-top: -.5em;
`