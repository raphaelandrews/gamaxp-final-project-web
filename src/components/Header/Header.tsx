import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';
import Modal from '../../components/Modal/Modal';
import useModal from '../../components/Modal/useModal';
import { Link } from 'react-router-dom';

import * as C from "../../styles/global";
import { useAuth } from '../../context/AuthProvider/useAuth';
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.header`
  padding: 0 1.25rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #979797;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  color: #000000;
  transition: .5s;
  &:hover {
    color: red;
  }
`;

export const Navbar = styled.nav`
  display: none;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  height: 100%;
  @media (min-width: 800px) {
    display: flex;
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
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
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
        <C.Container>
            <HeaderContainer>
                <Wrapper>
                    <Link to="/">
                        <Title>{title}</Title>
                    </Link>

                    <Navbar>
                        <NavbarList>
                            <NavbarListItem>
                                <Link to="/" onClick={toggle}>Home</Link>
                            </NavbarListItem>
                            <NavbarListItem>
                                <a href="#" onClick={toggle}>About</a>
                            </NavbarListItem>
                            <NavbarListItem>
                                <a href="#" onClick={onLogout}>Services</a>
                            </NavbarListItem>
                            <NavbarListItem>
                                <a href="#">Contact</a>
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
                                <a href="/login" onClick={toggle}>Home</a>
                            </NavbarListItem>
                            <NavbarListItem>
                                <a href="#" onClick={toggle}>About</a>
                            </NavbarListItem>
                            <NavbarListItem>
                                <a href="#">Services</a>
                            </NavbarListItem>
                            <NavbarListItem>
                                <a href="#">Contact</a>
                            </NavbarListItem>
                        </NavbarList>
                    </NavbarModal>
                </Modal>
            </HeaderContainer>
        </C.Container>
    );
};

export default Header;

