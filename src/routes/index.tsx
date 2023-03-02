import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import { ProtectedLayout } from '../components/ProtectedLayout';
import Checkout from "../pages/Checkout/Checkout";
import Home from "../pages/Home/Home";
import Login from '../pages/Login/Login';
import Product from "../pages/Product/Product";
import Products from "../pages/Products/Products";
import Signup from '../pages/Signup/Signup';
import CartSummary from "../pages/CartSummary/CartSummary";

function RoutesApp() {

  return (
    <BrowserRouter>
      <Header title="Gama BookStore" />
      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
        <Route path='/products' element={<Products />}>
        </Route>
        <Route path='/product' element={<Product />}>
        </Route>
        <Route path='/profile' element={<ProtectedLayout><h2>Olá</h2></ProtectedLayout>}>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/summary' element={<CartSummary/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;