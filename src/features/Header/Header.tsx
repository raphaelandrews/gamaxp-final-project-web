import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { Modal, useModal, OffCanvas, CartProduct } from "@/features";
import { useAuth, useCart, getUserLocalStorage } from "@/context";

import { G } from "@/styles";
import * as C from "./Header.styles";

import { User } from 'iconsax-react';

interface Props {
  title: string;
}

export const Header: React.FC<Props> = ({ title }) => {
  const { isOpen, toggle } = useModal();
  const { cartQuantity, CartProducts } = useCart()
  const user = getUserLocalStorage();

  const auth = useAuth()

  const UserLogged = () => {
    if (!auth.token) {
      return (
        <Link to="/login" onClick={toggle}>
          Login
        </Link>
      );
    }

    return (
      <C.IconWrapper onClick={onLogout}>
        <svg xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none">
          <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7"
            stroke="var(--first-color)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
          </path>
        </svg>
      </C.IconWrapper>
    )
  };

  const AdminPanel = () => {
    if (user.type === "admin") {
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
      <G.Container>
        <C.HeaderContainer>
          <C.Wrapper>
            <Link to="/">
              <C.Title>{title}</C.Title>
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
                    onClick={onLogout}>
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
      </G.Container>
    </C.HeaderWrapper>
  );
};
