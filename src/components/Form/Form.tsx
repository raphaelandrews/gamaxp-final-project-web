import { ReactNode } from "react";
import { FormDefault } from "./Form.styles";

interface FormProps {
    display?: string;
    flexDirection?: string;
    width?: string;
    maxWidth?: string;
    margin?: string;
    children?: ReactNode;
}

export const Form = (props: FormProps) => {
    return (
        <FormDefault>
            {props.children}
        </FormDefault>
    )
}