import { AuthProvider } from './context/AuthContext/AuthProvider'
import { ShoppingCartProvider } from "./context/CartContext/CartProvider";
import RoutesApp from './routes';
import GlobalStyle from './styles/global';

function App() {

  return (
    <AuthProvider>
      <ShoppingCartProvider>
        <RoutesApp />
        <GlobalStyle />
        </ShoppingCartProvider>
    </AuthProvider>
  )
}

export default App;
