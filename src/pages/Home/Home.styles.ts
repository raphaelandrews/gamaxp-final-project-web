import styled from "styled-components";

export const HomeContainer = styled.div`
    
`



export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: var(--bg-alt-color);
    aspect-ratio: 7/5;

    @media (min-width: 800px) {
        width: 90%;
        max-width: 1180px;
        margin: 4rem auto 0;
        border-radius: .75rem;
        aspect-ratio: 9/4;
    }
`
