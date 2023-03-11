import styled from "styled-components";

interface ThemePickerProps {
    height?: string;
}

export const ThemePickerDefault = styled.div<ThemePickerProps>`
    height: 10vh;
    background-color: var(--bg-alt-color);
`