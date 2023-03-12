import styled from "styled-components";

interface TitleProps {
    fontSize?: string;
    fontSizeMD?: string;
    fontWeight?: string;
    margin?: string;
}

export const TitleDefault = styled.h1<TitleProps>`
    font-size: ${(props) => props.fontSize ? props.fontSize : "var(--fs-8)"};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : "700"};
    margin: ${(props) => props.margin ? props.margin : "0"};

    @media (min-width: 800px) {
        font-size: ${(props) => props.fontSizeMD ? props.fontSizeMD : "var(--fs-9)"};
    }
`