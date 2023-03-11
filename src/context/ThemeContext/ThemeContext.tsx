import { createContext } from "react";

type ThemeContextType = {
  isSetTheme: string;
  toggleSetTheme: (e: string) => void;
  toggleThemePicker: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  isSetTheme: "",
  toggleSetTheme: () => {},
  toggleThemePicker: () => {},
});

