import { ReactNode } from "react";
import { ButtonDefault } from "./Button.styles";

interface ButtonProps {
    display?: string;
    size?: string;
    weight?: string;
    textTransform?: string;
    width?: string;
    height?: string;
    padding?: string;
    margin?: string;
    borderRadius?: string;
    border?: string;
    backgroundColor?: string;
    hoverBg?: string;
    text?: string | JSX.Element;
    type?: "submit" | "button" | "reset";
    disabled?: boolean;
    action?: () => void;
    children?: ReactNode;
}

export const Button = (props: ButtonProps) => {
    return (
        <ButtonDefault
            display={props.display}
            size={props.size}
            weight={props.weight}
            textTransform={props.textTransform}
            width={props.width}
            height={props.height}
            padding={props.padding}
            margin={props.margin}
            borderRadius={props.borderRadius}
            border={props.border}
            backgroundColor={props.backgroundColor}
            hoverBg={props.hoverBg}
            type={props.type ? props.type : "button"}
            onClick={props.action}
        >
            {props.text}
            {props.children}
        </ButtonDefault>
    );
}