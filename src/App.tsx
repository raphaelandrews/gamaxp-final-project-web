import { AuthProvider } from './context/AuthProvider'
import RoutesApp from './routes';
import GlobalStyle from './styles/global';

function App() {

  return (
    <AuthProvider>
        <RoutesApp />
        <GlobalStyle />
    </AuthProvider>
  )
}

export default App;
