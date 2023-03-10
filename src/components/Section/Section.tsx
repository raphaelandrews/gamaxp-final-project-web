import { SectionDefault } from "./Section.Styles";

interface SectionProps {
    position?: string;
    displayMD?: string;
    justifyContentMD?: string;
    gapMD?: string;
    width?: string;
    height?: string;
    padding?: string;
    margin?: string;
    children?: JSX.Element;
}

export const Section = (props: SectionProps) => {
    return (
        <SectionDefault
            position={props.position}
            displayMD={props.displayMD}
            justifyContentMD={props.justifyContentMD}
            gapMD={props.gapMD}
            width={props.width}
            height={props.height}
            padding={props.padding}
            margin={props.padding}
        >
            {props.children}
        </SectionDefault>
    )
}
