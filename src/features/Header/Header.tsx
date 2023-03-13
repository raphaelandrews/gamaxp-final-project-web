import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { Modal, useModal, OffCanvas, CartProduct } from "@/features";
import { useAuth, useCart, getUserLocalStorage, ThemeContext } from "@/context";
import { Button, Container } from "@/components";
import { SunIcon, UserIcon, CartIcon, HamburgerIcon, LogoIcon } from '@/assets/svg';

import * as C from "./Header.styles";
import axios from 'axios';

interface Props {
  title: string;
}

export const Header: React.FC<Props> = ({ title }) => {
  const { toggleThemePicker } = useContext(ThemeContext);
  const { isOpen, toggle } = useModal();
  const { cartQuantity, CartProducts } = useCart();
  const user = getUserLocalStorage();

  const auth = useAuth();

  const UserLogged = () => {
    if (!auth.token) {
      return (
        <Link to="/login" onClick={toggle}>
          Login
        </Link>
      );
    }

    return (
      <Button
        action={onLogout}
        display='flex'
        border='none'
        backgroundColor='transparent'>
        <UserIcon width="24px" height="24px" color="var(--first-color)" />
      </Button>
    )
  };

  const AdminPanel = () => {
    interface User {
      name: string;
      email: string;
      admin: boolean;
    }
    
    const [userData, setUserData] = useState<User>({ name: "", email: "", admin: false });

    useEffect(() => {
      async function getData() {
        const tokenString = localStorage.getItem("u");

        if (tokenString !== null) {
          const tokenObject = JSON.parse(tokenString);
          const token = tokenObject.token;

          const response = await axios({
            method: "GET",
            url: `${import.meta.env.VITE_API_HOST}/user-logged`,
            headers: {
              authorization: `Bearer ${token}`,
            },
          })

          setUserData(response.data)
        } else {
          console.error("Token string is null");
        }
      }
      getData()
    }, [])

    if (userData.admin === true) {
      return (
        <NavLink to="/dashboard" onClick={toggle}
          style={({ isActive }) =>
            isActive ? activeStyle : undefined}>
          Admin
        </NavLink>
      )
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
      <Container>
        <C.HeaderContainer>
          <C.Wrapper>
            <Link to="/">
              <LogoIcon display='block' width='6rem' height='calc(6rem / 2.25)' />
            </Link>

            <C.Navbar>
              <C.NavbarList>
                <C.NavbarListItem>
                  <NavLink
                    to="/"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined}
                    onClick={toggle}>
                    Home
                  </NavLink>
                </C.NavbarListItem>
                <C.NavbarListItem>
                  <NavLink
                    to="/products"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined}
                    onClick={toggle}>
                    Products
                  </NavLink>
                </C.NavbarListItem>
                <C.NavbarListItem>
                  <NavLink
                    to="/about"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined}
                    onClick={toggle}>
                    About
                  </NavLink>
                </C.NavbarListItem>
                <C.NavbarListItem>
                  <NavLink
                    to="/contact"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined}
                    onClick={toggle}>
                    Contact
                  </NavLink>
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
                <CartIcon width='20px' height='20px' color='var(--first-color)' />

                <C.CartQuantity>
                  {cartQuantity}
                </C.CartQuantity>
              </C.CartIcon>
              <OffCanvas isCanvasOpen={isCanvasOpen} onClose={handleClose}>
                <>
                  <C.CartTitle>Cart</C.CartTitle>
                  <C.OffCanvasWrapper>
                    <Link to="/summary" onClick={handleClose}>Go to Cart Summary</Link>
                    <C.OffCanvasContent>
                      {CartProducts.map(item => (
                        <CartProduct
                          key={item.id}
                          {...item}
                          flexDirection="column"
                        />
                      ))}
                    </C.OffCanvasContent>
                  </C.OffCanvasWrapper>
                </>
              </OffCanvas>
            </C.CartWrapper>

            <Button action={toggleThemePicker} display='flex' border='none' marginMD='.25rem 0 0' backgroundColor='transparent'>
              <SunIcon width="24px" height="24px" color="var(--first-color)" />
            </Button>

            <C.Hamburger onClick={toggle}>
              <HamburgerIcon width='24px' height='24px' color='var(--alt-color)' />
            </C.Hamburger>
            <C.Login>
              {UserLogged()}
            </C.Login>
          </C.Wrapper>

          <Modal isOpen={isOpen} toggle={toggle}>
            <C.NavbarModal>
              <C.NavbarList>
                <C.NavbarListItem>
                  <NavLink
                    to="/"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined}
                    onClick={toggle}>
                    Home
                  </NavLink>
                </C.NavbarListItem>
                <C.NavbarListItem>
                  <NavLink
                    to="/products"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined}
                    onClick={toggle}>
                    Products
                  </NavLink>
                </C.NavbarListItem>
                <C.NavbarListItem>
                  <NavLink
                    to="/about"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined}
                    onClick={toggle}>
                    About
                  </NavLink>
                </C.NavbarListItem>
                <C.NavbarListItem>
                  <NavLink
                    to="/contact"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined}
                    onClick={toggle}>
                    Contact
                  </NavLink>
                </C.NavbarListItem>
              </C.NavbarList>
            </C.NavbarModal>

            <C.LoginModal>
              {UserLogged()}
            </C.LoginModal>
          </Modal>
        </C.HeaderContainer>
      </Container>
    </C.HeaderWrapper>
  );
};
