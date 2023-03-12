import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedLayout, ProtectedDashboard, Header, Footer } from '@/features';

import { Home, Login, Signup, Profile, Products, Product, CartSummary, Checkout, Dashboard, CreateProduct, CreateAdmin, DeleteProduct, EditProduct } from "@/pages";

function RoutesApp() {

  return (
    <BrowserRouter>
      <Header title="Gama BookStore" />
      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/product/:id' element={<Product />}></Route>
          <Route path='/summary' element={<CartSummary />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/createProduct' element={<CreateProduct />}></Route>
          <Route path='/createAdmin' element={<CreateAdmin />}></Route>
          <Route
            path='/profile'
            element={<ProtectedLayout><Profile /></ProtectedLayout>}
          >
          </Route>
          <Route path='/edit-product/:id' element={<EditProduct />}></Route>
          <Route path='/delete-product/:id' element={<DeleteProduct />}></Route>
        </Routes>
      </main>
      {/*<Footer />*/}
    </BrowserRouter>
  )
}

export default RoutesApp;