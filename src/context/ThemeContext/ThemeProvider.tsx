// ThemeProvider.tsx
import { useEffect, useState, ReactNode } from "react";
import { ThemePicker, ThemeProvider } from "@/features";
import { GlobalStyles, lightTheme, darkTheme, seaTheme } from "@/styles";
import { ThemeContext } from "@/context";

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeContextProvider({ children }: ThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState("");

  const [isThemePicker, setIsThemePicker] = useState(false);

  const toggleDarkMode = (e: string) => {
    setIsDarkMode(e);
  };

  const toggleThemePicker = () => {
    setIsThemePicker(!isThemePicker);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light" || savedTheme === "sea") {
      setIsDarkMode(savedTheme);
    }
  }, []);

  useEffect(() => {
    function setTheme() {
      localStorage.setItem("theme", isDarkMode);
    }

    setTheme()
  }, [isDarkMode]);

  type Theme = {
    colors: {
      primary: string;
      secondary: string;
      secondaryAlt: string;
      tertiary: string;
      tertiaryAlt: string;
      quaternary: string;
      alternative: string;
      backgroundAlt: string;
      background: string;
    };
    fonts: {
      roboto: string;
    };
  };

  function getThemeObject(theme: string): Theme {
    if (theme === "dark") {
      return darkTheme
    } else if (theme === "light") {
      return lightTheme
    } else if (theme == "sea") {
      return seaTheme
    }

    return theme === "corinthians" ? darkTheme : lightTheme;
  }

  const contextValue = {
    isDarkMode,
    toggleDarkMode,
    toggleThemePicker,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={getThemeObject(isDarkMode)}>
        <GlobalStyles />
        {isThemePicker &&
          <ThemePicker />
        }
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
