import { AuthProvider, CartProvider, ThemeContextProvider } from "@/context";
import RoutesApp from "./routes/Routes";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ThemeContextProvider>
          <RoutesApp />
        </ThemeContextProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;