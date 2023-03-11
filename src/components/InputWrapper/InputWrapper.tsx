import { ReactNode } from "react";
import { InputWrapperDefault } from "./InputWrapper.styles";

interface InputWrapperProps {
    children?: ReactNode;
}

export const InputWrapper = (props: InputWrapperProps) => {
    return (
        <InputWrapperDefault>
            {props.children}
        </InputWrapperDefault>
    )
}