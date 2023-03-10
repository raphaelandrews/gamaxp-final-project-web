import styled from "styled-components";

interface SectionProps {
    position?: string;
    displayMD?: string;
    justifyContentMD?: string;
    gapMD?: string;
    width?: string;
    height?: string;
    padding?: string;
    margin?: string;
}

export const SectionDefault = styled.section<SectionProps>`
    position: ${(props) => props.position ? props.position : "relative"};
    width: ${(props) => props.width ? props.width : "100%"};
    height: ${(props) => props.height ? props.height : "100%"};
    padding: ${(props) => props.padding ? props.padding : "0"};
    margin: ${(props) => props.margin ? props.margin : "0"};

    @media (min-width: 800px) {
        display: ${(props) => props.displayMD};
        justify-content: ${(props) => props.justifyContentMD};
        gap: ${(props) => props.gapMD};
    }
`