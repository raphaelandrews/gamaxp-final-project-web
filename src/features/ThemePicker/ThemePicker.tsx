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
            <button>cor2</button>
            <button>cor3</button>
            <button>cor4</button>
        </ThemePickerDefault>
    )
}