import { AuthProvider } from "./context/AuthContext/AuthProvider";
import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "./features/ThemeProvider";
import GlobalStyle from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import RoutesApp from "./routes/Routes";

function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RoutesApp />
        </ThemeProvider>
      </CartProvider>
    </AuthProvider>
  )
}

export default App;
