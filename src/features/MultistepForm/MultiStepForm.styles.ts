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
    }
`;

export const InputWrapperRadio = styled.div`
    display: flex;
    font-size: var(--fs-6);
    gap: 1rem;
    padding: 1rem;
    margin-bottom: 1rem;

    @media (min-width: 800px) {
        font-size: var(--fs-7);
    }
`
