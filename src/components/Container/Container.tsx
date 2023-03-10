import { ContainerDefault } from "./Container.styles";

interface ContainerProps {
    width?: string;
    maxWidth?: string;
    margin?: string;
    children?: JSX.Element;
}

export const Container = (props: ContainerProps) => {
    return (
        <ContainerDefault
            width={props.width}
            maxWidth={props.maxWidth}
            margin={props.margin}
        >
            {props.children}
        </ContainerDefault>
    )
}
