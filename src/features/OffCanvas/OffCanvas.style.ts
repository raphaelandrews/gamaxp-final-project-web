import styled from 'styled-components';

export const OffCanvasContainer = styled.div<{ isCanvasOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ isCanvasOpen }) => (isCanvasOpen ? "0" : "-320px")};
  width: 80%;
  max-width: 320px;
  height: 100%;
  padding: 1.5rem;
  background-color: var(--bg-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  z-index: 5;
`;

export const Button = styled.button`
    position: absolute;
    right: 1.5rem;
    border: none;
    background: none;

    &:hover {
      cursor: pointer;

      svg {
        path {
          stroke: var(--third-color-alt);
          transition: .5s;
        }
      }
    }
`

export const Overlay = styled.div<{ isCanvasOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: ${({ isCanvasOpen }) => (isCanvasOpen ? "1" : "0")};
  visibility: ${({ isCanvasOpen }) => (isCanvasOpen ? "visible" : "hidden")};
  transition: all 0.3s ease-in-out;
  z-index: 4;
`;