import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import { ProtectedLayout } from '../components/ProtectedLayout';
import Home from "../pages/Home/Home";
import Login from '../pages/Login';
import Signup from '../pages/Signup/Signup';

function RoutesApp() {

  return (
      <BrowserRouter>
      <Header title="Group Four" />
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>
          <Route path='/profile' element={<ProtectedLayout><h2>Olá</h2></ProtectedLayout>}>
          </Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default RoutesApp;