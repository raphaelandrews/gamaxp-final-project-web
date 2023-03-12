import styled from "styled-components";

interface ThemePickerProps {
    height?: string;
}

export const ThemePickerContainer = styled.section`
    width: 100%;
    background-color: var(--bg-alt-color);
`

export const ThemePickerDefault = styled.div<ThemePickerProps>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    max-width: 1200px;
    height: 10rem;
    padding: 2rem;
    background-color: var(--bg-alt-color);
    overflow: scroll hidden;
    transition: 10rem .4s cubic-bezier(.4, 0, .2, 1);
`

interface SpanProps {
    display?: string;
    fontFamily?: string;
    fontSize?: string;
    color?: string;
    textAlign?: string;
    textIndent?: string;
    whiteSpace?: string;
    width?: string;
    height?: string;
    padding?: string;
    margin?: string;
    borderRadius?: string;
    backgroundColor?: string;
    boxShadow?: string;
    verticalAlign?: string;
    overflow?: string;
}

export const Span = styled.span<SpanProps>`
    display: ${(props) => props.display ? props.display : "block"};
    font-family: ${(props) => props.fontFamily};
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.color};
    text-align: ${(props) => props.textAlign};
    text-indent: ${(props) => props.textIndent};
    white-space: ${(props) => props.whiteSpace};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
    border-radius: ${(props) => props.borderRadius};
    background-color: ${(props) => props.backgroundColor};
    box-shadow: ${(props) => props.boxShadow};
    vertical-align: ${(props) => props.verticalAlign};
    overflow: ${(props) => props.overflow};
`