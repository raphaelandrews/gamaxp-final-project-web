import RoutesApp from "./routes/Routes";
import { AuthProvider, CartProvider } from "@/context";
import { ThemeProvider } from "@/features";

import { GlobalStyles, theme } from "@/styles";

function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <RoutesApp />
        </ThemeProvider>
      </CartProvider>
    </AuthProvider>
  )
}

export default App;
