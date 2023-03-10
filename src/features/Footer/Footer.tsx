import React, { useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { Container } from "@/components";
import * as C from "./Footer.styles";


export const Footer = () => {

    const Products = useRef(null);
    const About = useRef(null);
    const Contact = useRef(null);

    const scrollToSection = (elementRef: any) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
    }

    let activeStyle = {
        color: 'var(--second-color)',
    };

    return (
        <C.FooterWrapper>
            <Container>
                <>
                    <C.FooterContainer>
                        <C.SignupFooter>
                            <Link to="/singup">Sign Up for Gama Bookstore</Link>
                            <h5 className='argument'>and become our customer and get the best prices!</h5>
                        </C.SignupFooter>

                        <C.ShopList>
                            <C.ShopItem>
                                <NavLink
                                    to="/products"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined}
                                    onClick={() => scrollToSection(Products)}>
                                    Products
                                </NavLink>
                            </C.ShopItem>
                            <C.ShopItem>
                                <NavLink
                                    to="/about"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined}
                                    onClick={() => scrollToSection(About)}>
                                    About
                                </NavLink>
                            </C.ShopItem>
                            <C.ShopItem>
                                <NavLink
                                    to="/contact"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined}
                                    onClick={() => scrollToSection(Contact)}>
                                    Contact
                                </NavLink>
                            </C.ShopItem>
                        </C.ShopList>
                    </C.FooterContainer>
                    <C.Copyrights>
                        <p>Coded by Grupo 4 XP46</p>
                    </C.Copyrights>
                </>
            </Container>
        </C.FooterWrapper>
    )
};