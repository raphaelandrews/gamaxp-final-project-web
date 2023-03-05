import { ButtonDefault } from "./Button.styles";

interface ButtonProps {
    backgroundColor?: string;
    marginTop?: string;
    width?: string;
    padding?: string;
    hoverBg?: string;
    text?: string;
    action?: () => void;
}

export default function Button(props: ButtonProps) {
    return (
        <ButtonDefault
            backgroundColor={props.backgroundColor}
            marginTop={props.marginTop}
            width={props.width}
            padding={props.padding}
            hoverBg={props.hoverBg}
            onClick={props.action}
        >
            {props.text}
        </ButtonDefault>
    );
}