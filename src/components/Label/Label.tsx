import { LabelDefault } from "./Label.styles"

interface LabelProps {
    margin?: string;
    text: string;
    htmlFor: string;
}

export const Label = (props: LabelProps) => {
    return (
        <LabelDefault
            margin={props.margin}
            htmlFor={props.htmlFor}
        >
            {props.text}
        </LabelDefault>
    )
}