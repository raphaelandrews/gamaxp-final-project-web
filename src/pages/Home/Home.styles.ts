import styled from "styled-components";

export const HomeContainer = styled.div`
    
`

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    width: 100%;
    height: 400px;
    margin-top: 4rem;
    border-radius: .75rem;
    background-color: var(--bg-alt-color);
`

export const SectionTitle = styled.h2`
    font-size: 1.125rem;
    width: 80%;
    margin: 4rem auto 0;

@media (min-width: 600px) {
    width: 90%;
}

@media (min-width: 800px) {
    font-size: 1.25rem;
    width: 94%;
}

@media (min-width: 1400px) {
    width: 100%;
}
`