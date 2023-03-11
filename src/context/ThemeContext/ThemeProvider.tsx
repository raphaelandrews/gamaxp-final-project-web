// ThemeProvider.tsx
import { useEffect, useState, ReactNode } from "react";
import { ThemePicker, ThemeProvider } from "@/features";
import { GlobalStyles, lightTheme, darkTheme } from "@/styles";
import { ThemeContext } from "@/context";

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeContextProvider({ children }: ThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState("");
  /* const toggleDarkMode = () => {
     setIsDarkMode(!isDarkMode);
   };*/

  const [isThemePicker, setIsThemePicker] = useState(false);

  const toggleDarkMode = (e: string) => {
    setIsDarkMode(e);
  };

  const toggleThemePicker = () => {
    setIsThemePicker(!isThemePicker);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode("");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const contextValue = {
    isDarkMode,
    toggleDarkMode,
    toggleThemePicker,
  };
console.log(isDarkMode)
  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        {isThemePicker &&
          <ThemePicker/>
        }
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
