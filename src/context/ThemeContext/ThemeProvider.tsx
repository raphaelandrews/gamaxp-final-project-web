// ThemeProvider.tsx
import { useEffect, useState, ReactNode } from "react";
import { ThemePicker, ThemeProvider } from "@/features";
import { GlobalStyles, lightTheme, darkTheme, cyberpunkTheme } from "@/styles";
import { ThemeContext } from "@/context";

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeContextProvider({ children }: ThemeProviderProps) {
  const [isSetTheme, setIsSetTheme] = useState("");

  const [isThemePicker, setIsThemePicker] = useState(false);

  const toggleSetTheme = (e: string) => {
    setIsSetTheme(e);
  };

  const toggleThemePicker = () => {
    setIsThemePicker(!isThemePicker);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light" || savedTheme === "cyberpunk") {
      setIsSetTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    function setTheme() {
      localStorage.setItem("theme", isSetTheme);
    }

    setTheme()
  }, [isSetTheme]);

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
      primary: string;
    };
    fontSizes: {
      fontSize1: string;
      fontSize2: string;
      fontSize3: string;
      fontSize4: string;
      fontSize5: string;
      fontSize6: string;
      fontSize7: string;
      fontSize8: string;
      fontSize9: string;
      fontSize10: string;
      fontSize11: string;
      fontSize12: string;
      fontSize13: string;
      fontSize14: string;
      fontSize15: string;
    };
  };

  function getThemeObject(theme: string): Theme {
    if (theme === "dark") {
      return darkTheme;
    } else if (theme === "light") {
      return lightTheme;
    } else if (theme == "cyberpunk") {
      return cyberpunkTheme;
    }

    return theme === "corinthians" ? darkTheme : lightTheme;
  }

  const contextValue = {
    isSetTheme,
    toggleSetTheme,
    toggleThemePicker,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={getThemeObject(isSetTheme)}>
        <GlobalStyles />
        {isThemePicker &&
          <ThemePicker />
        }
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
