import { useEffect, useState } from "react";
import RoutesApp from "./routes/Routes";
import { AuthProvider, CartProvider } from "@/context";
import { ThemeProvider } from "@/features";

import { GlobalStyles, lightTheme, darkTheme } from "@/styles";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <AuthProvider>
      <CartProvider>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <GlobalStyles />
          <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
          <RoutesApp />
        </ThemeProvider>
      </CartProvider>
    </AuthProvider>
  )
}

export default App;
