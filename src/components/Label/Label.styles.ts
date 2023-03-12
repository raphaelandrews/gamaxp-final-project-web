import styled from "styled-components";

interface LabelProps {
    fontSize?: string;
    fontSizeMD?: string;
    margin?: string;
}

export const LabelDefault = styled.label<LabelProps>`
    font-size: ${(props) => props.fontSize};
    margin: ${(props) => props.margin ? props.margin : ".25em"};

    @media (min-width: 800px) {
        font-size: ${(props) => props.fontSizeMD};
    }
`
