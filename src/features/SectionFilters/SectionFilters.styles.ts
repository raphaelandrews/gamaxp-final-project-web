import styled from "styled-components";

export const SectionTitle = styled.h2`
    font-size: var(--fs-6);
    width: 80%;
    margin: 4rem auto 0;

    @media (min-width: 600px) {
        width: 90%;
    }

    @media (min-width: 800px) {
        font-size: var(--fs-7);
        width: 94%;
    }

    @media (min-width: 1400px) {
        width: 100%;
    }
`