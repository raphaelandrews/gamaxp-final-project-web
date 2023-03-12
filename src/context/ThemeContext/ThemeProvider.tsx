// ThemeProvider.tsx
import { useEffect, useState, ReactNode } from "react";
import { ThemePicker, ThemeProvider } from "@/features";
import { GlobalStyles, lightTheme, darkTheme, seaTheme } from "@/styles";
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
    if (savedTheme === "dark" || savedTheme === "light" || savedTheme === "sea") {
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
      fontSize1: '.5rem',
      fontSize2: '.625rem',
      fontSize3: '.75rem',
      fontSize4: '.875rem',
      fontSize5: '1rem',
      fontSize6: '1.125rem',
      fontSize7: '1.25rem',
      fontSize8: '1.5rem',
      fontSize9: '1.75rem',
      fontSize10: '2rem',
      fontSize11: '2.25rem',
      fontSize12: '2.5rem',
      fontSize13: '3rem',
      fontSize14: '3.25rem',
      fontSize15: '3.5rem',
    }
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
