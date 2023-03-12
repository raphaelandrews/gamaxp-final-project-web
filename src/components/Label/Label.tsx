import { LabelDefault } from "./Label.styles"

interface LabelProps {
    fontSize?: string;
    fontSizeMD?: string;
    margin?: string;
    text: string;
    htmlFor: string;
}

export const Label = (props: LabelProps) => {
    return (
        <LabelDefault
            fontSize={props.fontSize}
            fontSizeMD={props.fontSizeMD}
            margin={props.margin}
            htmlFor={props.htmlFor}
        >
            {props.text}
        </LabelDefault>
    )
}