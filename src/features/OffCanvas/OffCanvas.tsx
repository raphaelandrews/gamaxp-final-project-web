import React from "react";
import * as C from "./OffCanvas.style"

interface OffCanvasProps {
  isCanvasOpen: boolean;
  onClose: () => void;
  children: JSX.Element
}

export const OffCanvas: React.FC<OffCanvasProps> = ({ isCanvasOpen, onClose, children }) => {
  return (
    <>
      <C.OffCanvasContainer isCanvasOpen={isCanvasOpen}>
        <C.Button onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none">
            <path d="m9.17 14.83 5.66-5.66M14.83 14.83 9.17 9.17M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
              stroke="var(--third-color)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round">
            </path>
          </svg>
        </C.Button>
        {children}
      </C.OffCanvasContainer>
      <C.Overlay isCanvasOpen={isCanvasOpen} onClick={onClose} />
    </>
  );
};
