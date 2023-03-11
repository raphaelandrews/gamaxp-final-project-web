import { createContext } from "react";

type ThemeContextType = {
  isDarkMode: string;
  toggleDarkMode: (e: string) => void;
  toggleThemePicker: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: "",
  toggleDarkMode: () => {},
  toggleThemePicker: () => {},
});

