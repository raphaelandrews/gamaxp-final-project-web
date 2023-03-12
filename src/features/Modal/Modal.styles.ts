import styled from "styled-components";

export const ModalOverlay = styled.div`
    position:fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    z-index: 9999;
    @media (min-width: 800px) {
        display: none;
    }
`;

export const ModalBox = styled.div`
    position: fixed;
    top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 240px;
    max-width: 90%;
    min-height: 240px;
    max-height: 90%;
    padding: 3rem 0;
    border-radius: .75rem;
    background: var(--bg-alt-color);
`;