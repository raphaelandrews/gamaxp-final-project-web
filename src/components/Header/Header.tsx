import React, { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import useModal from '../../components/Modal/useModal';
import { NavLink, Link } from 'react-router-dom';
import * as G from "../../styles/GlobalStyles";
import * as C from "./Header.styles";

import { useAuth } from '../../context/AuthContext/useAuth';
import { useNavigate } from "react-router-dom";
import { ShoppingCart, User } from 'iconsax-react';
import { useCart } from "../../context/CartContext"
import OffCanvas from '../OffCanvas/OffCanvas';
import { Cart } from "../Cart/Cart"
import { getUserLocalStorage } from '../../context/AuthContext/util';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  const { isOpen, toggle } = useModal();
  const { cartQuantity } = useCart()
  const user = getUserLocalStorage();

  const auth = useAuth()

  const UserLogged = () => {
    if (!auth.email) {
      return (
        <Link to="/login">
          Login
        </Link>
      );
    }

    return <User size="20" color="#000000" onClick={onLogout} />;
  };

  const AdminPanel = () => {
    if (user.type === "admin") {
      return <NavLink to="/dashboard" onClick={toggle}>Admin</NavLink>
    } else {
      return
    }
  }

  const navigate = useNavigate();

  function onLogout() {
    auth.logout()
    navigate("/");
  }

  const [isCanvasOpen, setIsCanvasOpen] = useState(false);

  const handleOpen = () => {
    setIsCanvasOpen(true);
  };

  const handleClose = () => {
    setIsCanvasOpen(false);
  };

  let activeStyle = {
    color: 'var(--second-color)',
  };

  return (
    <C.HeaderWrapper>
      <G.Container>
        <C.HeaderContainer>
          <C.Wrapper>
            <Link to="/">
              <C.Title>{title}</C.Title>
            </Link>

            <C.Navbar>
              <C.NavbarList>
                <C.NavbarListItem>
                  <NavLink to="/" style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                  onClick={toggle}>Home</NavLink>
                </C.NavbarListItem>
                <C.NavbarListItem>
                  <NavLink to="/products" onClick={toggle}>Products</NavLink>
                </C.NavbarListItem>
                <C.NavbarListItem>
                  <NavLink to="/" onClick={onLogout}>About</NavLink>
                </C.NavbarListItem>
                <C.NavbarListItem>
                  <NavLink to="/" onClick={toggle}>Contact</NavLink>
                </C.NavbarListItem>
                <C.NavbarListItem>
                  {user ? AdminPanel() : ""}
                </C.NavbarListItem>
              </C.NavbarList>
            </C.Navbar>
          </C.Wrapper>

          <C.Wrapper>
            <C.CartWrapper>
              <C.CartIcon onClick={handleOpen}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none">
                  <path d="M2 2h1.74c1.08 0 1.93.93 1.84 2l-.83 9.96a2.796 2.796 0 0 0 2.79 3.03h10.65c1.44 0 2.7-1.18 2.81-2.61l.54-7.5c.12-1.66-1.14-3.01-2.81-3.01H5.82M16.25 22a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM8.25 22a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM9 8h12"
                    stroke="var(--alt-color)"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                  </path>
                </svg>
                <C.CartQuantity>
                  {cartQuantity}
                </C.CartQuantity>
              </C.CartIcon>
              <OffCanvas isCanvasOpen={isCanvasOpen} onClose={handleClose}>
                <Cart />
              </OffCanvas>
            </C.CartWrapper>

            <C.Hamburger onClick={toggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
                viewBox="0 0 24 24"
                fill="none">
                <path d="M3 7h18M3 12h18M3 17h18"
                  stroke="var(--first-color)"
                  strokeWidth="2"
                  strokeLinecap="round">
                </path>
              </svg>
            </C.Hamburger>

            <C.Login>
              {UserLogged()}
            </C.Login>
          </C.Wrapper>

          <Modal isOpen={isOpen} toggle={toggle}>
            <C.NavbarModal>
              <C.NavbarList>
                <C.NavbarListItem>
                  <NavLink to="/" onClick={toggle}>Home</NavLink>
                </C.NavbarListItem>
                <C.NavbarListItem>
                  <NavLink to="/products" onClick={toggle}>Products</NavLink>
                </C.NavbarListItem>
                <C.NavbarListItem>
                  <NavLink to="/">About</NavLink>
                </C.NavbarListItem>
                <C.NavbarListItem>
                  <NavLink to="/">Contact</NavLink>
                </C.NavbarListItem>
              </C.NavbarList>
            </C.NavbarModal>
          </Modal>
        </C.HeaderContainer>
      </G.Container>
    </C.HeaderWrapper>
  );
};

export default Header;

