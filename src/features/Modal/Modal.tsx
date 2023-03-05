import { ReactNode } from "react";
import * as C from "./Modal.styles"

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

export function Modal(props: ModalType) {
    return (
        <>
            {props.isOpen && (
                <C.ModalOverlay onClick={props.toggle}>
                    <C.ModalBox onClick={(e) => e.stopPropagation()}>
                        {props.children}
                    </C.ModalBox>
                </C.ModalOverlay>
            )}
        </>
    );
}