import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';
import Modal from '../../components/Modal/Modal';
import useModal from '../../components/Modal/useModal';
import { NavLink, Link } from 'react-router-dom';

import * as C from "../../styles/global";
import { useAuth } from '../../context/AuthProvider/useAuth';
import { useNavigate } from "react-router-dom";


const HeaderWrapper = styled.header`
  background-color: #FFC107;
  box-shadow: 0 3px 12px rgb(0 0 0 / 10%);
`;


const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  @media (min-width: 800px) {
    height: 5rem;
  }
`;

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  color: #000000;
  transition: .5s;
`;

export const Navbar = styled.nav`
  display: none;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  height: 100%;
  @media (min-width: 800px) {
    display: block;
  }
`;

export const NavbarModal = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 100%;
  left: 0;
  right: 0;
  transition: all 0.3s;
  height: 100%;
  overflow: hidden;
  @media (min-width: 800px) {
    display: none;
  }
`;

export const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style: none;
  @media (min-width: 800px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

export const NavbarListItem = styled.li`
  margin: 10px 0;
  a {
    color: #000000;
    font-size: 1rem;
    font-weight: 400;
    transition: .5s;
  }
   &:hover {
    a{
    color: #757575;
    }
  }
`;

const Hamburger = styled.button`
  appearance: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 800px) {
    display: none;
  }
`;

const Login = styled.div`
display: none;
  font-size: 1rem;
  font-weight: 400;
  a {
    color: #000000;
    transition: .5s;
  }
  &:hover {
    a{
    color: #757575;
    }
  }
  @media (min-width: 800px) {
    display: block;
  }
`

const Circle = styled.div`
  display: none;
  width: 2.5rem;
  height: 2.5rem;
  background-color: grey;
  border-radius: 50%;
  @media (min-width: 800px) {
    display: block;
  }
`

const Wrapper = styled.div`
  display:flex;
  align-items: center;
  gap: 2rem;
`

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  const { isOpen, toggle } = useModal();

  const auth = useAuth()

  const UserLogged = () => {
    if (!auth.email) {
      return (
        <Link to="/login">
          Login
        </Link>
      );
    }

    return <Circle />;
  };

  const navigate = useNavigate();

  function onLogout() {
    auth.logout()
    navigate("/");
  }


  return (
    <HeaderWrapper>
      <C.Container>
        <HeaderContainer>
          <Wrapper>
            <Link to="/">
              <Title>{title}</Title>
            </Link>

            <Navbar>
              <NavbarList>
                <NavbarListItem>
                  <NavLink to="/" onClick={toggle}>Home</NavLink>
                </NavbarListItem>
                <NavbarListItem>
                  <NavLink to="/products" onClick={toggle}>Products</NavLink>
                </NavbarListItem>
                <NavbarListItem>
                  <NavLink to="/" onClick={onLogout}>About</NavLink>
                </NavbarListItem>
                <NavbarListItem>
                  <NavLink to="/" onClick={toggle}>Contact</NavLink>
                </NavbarListItem>
              </NavbarList>
            </Navbar>
          </Wrapper>

          <Hamburger onClick={toggle}>
            Modal
          </Hamburger>

          <Login>
            {UserLogged()}
          </Login>

          <Modal isOpen={isOpen} toggle={toggle}>
            <NavbarModal>
              <NavbarList>
                <NavbarListItem>
                  <NavLink to="/" onClick={toggle}>Home</NavLink>
                </NavbarListItem>
                <NavbarListItem>
                  <NavLink to="/products" onClick={toggle}>Products</NavLink>
                </NavbarListItem>
                <NavbarListItem>
                  <NavLink to="/">About</NavLink>
                </NavbarListItem>
                <NavbarListItem>
                  <NavLink to="/">Contact</NavLink>
                </NavbarListItem>
              </NavbarList>
            </NavbarModal>
          </Modal>
        </HeaderContainer>
      </C.Container>
    </HeaderWrapper>
  );
};

export default Header;

