import { ButtonDefault } from "./Button.styles";

interface ButtonProps {
    weight?: string;
    textTransform?: string;
    width?: string;
    height?: string;
    padding?: string;
    marginTop?: string;
    borderRadius?: string;
    backgroundColor?: string;
    hoverBg?: string;
    text?: string;
    type?: string;
    disabled?: boolean;
    action?: () => void;
}

export function Button(props: ButtonProps) {
    return (
        <ButtonDefault
            weight={props.weight}
            textTransform={props.textTransform}
            width={props.width}
            height={props.height}
            padding={props.padding}
            marginTop={props.marginTop}
            borderRadius={props.borderRadius}
            backgroundColor={props.backgroundColor}
            hoverBg={props.hoverBg}
            onClick={props.action}
        >
            {props.text}
        </ButtonDefault>
    );
}