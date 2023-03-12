import { ReactNode } from "react";
import { ButtonDefault } from "./Button.styles";

interface ButtonProps {
    display?: string;
    displayMD?: string;
    size?: string;
    sizeMD?: string;
    color?: string;
    colorHover?: string;
    weight?: string;
    textTransform?: string;
    width?: string;
    minWidth?: string;
    height?: string;
    padding?: string;
    margin?: string;
    marginMD?: string;
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
            displayMD={props.displayMD}
            size={props.size}
            sizeMD={props.sizeMD}
            color={props.color}
            colorHover={props.colorHover}
            weight={props.weight}
            textTransform={props.textTransform}
            width={props.width}
            minWidth={props.minWidth}
            height={props.height}
            padding={props.padding}
            margin={props.margin}
            marginMD={props.marginMD}
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