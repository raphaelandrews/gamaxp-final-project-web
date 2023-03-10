import { TitleDefault } from "./Title.styles";

interface TitleProps {
    fontSize?: string;
    fontSizeMD?: string;
    fontWeight?: string;
    margin?: string;
    text: string;
}

export const Title = (props: TitleProps) => {
    return (
        <TitleDefault
            fontSize={props.fontSize}
            fontSizeMD={props.fontSizeMD}
            fontWeight={props.fontWeight}
            margin={props.margin}
        >
            {props.text}
        </TitleDefault>
    )
}
