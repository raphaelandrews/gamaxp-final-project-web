import { ReactNode, useContext } from "react";
import { ThemeContext } from "@/context";

import { ThemePickerDefault } from "./ThemePicker.styles";

interface ThemePickerProps {
    height?: string;
    children?: ReactNode;
}

export const ThemePicker = (props: ThemePickerProps) => {
    const { toggleDarkMode } = useContext(ThemeContext);
    
    return (
        <ThemePickerDefault>
            <button onClick={() => toggleDarkMode("dark")}>cor1</button>
            <button onClick={() => toggleDarkMode("light")}>cor2</button>
            <button onClick={() => toggleDarkMode("sea")}>cor3</button>
            <button>cor4</button>
        </ThemePickerDefault>
    )
}