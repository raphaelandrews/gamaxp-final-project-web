import { ReactNode } from "react";
import { FormWrapperDefault } from "./FormWrapper.styles";

interface FormWrapperProps {
    children?: ReactNode;
}

export const FormWrapper = (props: FormWrapperProps) => {
    return (
        <FormWrapperDefault>
            {props.children}
        </FormWrapperDefault>
    )
}