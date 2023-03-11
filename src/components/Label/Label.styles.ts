import styled from "styled-components";

interface LabelProps {
    margin?: string;
}

export const LabelDefault = styled.label<LabelProps>`
    margin: ${(props) => props.margin ? props.margin : ".25em"};
`
