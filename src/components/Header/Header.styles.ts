import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: var(--bg-color);
`;


export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  @media (min-width: 800px) {
    height: 6rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  transition: .5s;
  @media (min-width: 800px) {
    font-size: 1.5rem;
  }
`;

export const Navbar = styled.nav`
  display: none;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  height: 100%;
  @media (min-width: 800px) {
    display: block;
  }
  @media (min-width: 1000px) {
    margin-left: 2rem;
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
    a {
        color: var(--alt-color);
        font-size: 1rem;
        transition: .5s;
    }

    &:hover {
        a{
            color: var(--first-color) !important;
        }
    }

    @media (min-width: 800px) {
        margin-top: .25rem;
        a {
            font-size: 1.125rem;
        }
    }
`;

export const Hamburger = styled.button`
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

export const Login = styled.div`
display: none;
  font-size: 1rem;
  a {
    transition: .5s;
  }
  &:hover {
    cursor: pointer;
    a{
    color: var(--second-color);
    }
  }
  @media (min-width: 800px) {
    display: block;
    font-size: 1.125rem;
    margin-top: .25rem;
  }
`

export const Wrapper = styled.div`
  display:flex;
  align-items: center;
  gap: 2rem;
`

export const CartWrapper = styled.div`
    display: flex;
`

export const CartIcon = styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5rem;
    width: 2rem;
    height: 2rem;
    border-radius: .25rem;
    background-color: var(--bg-alt-color);
    border: none;

    &:hover {
        cursor: pointer;
    }

    @media (min-width: 800px) {
        width: 2.5rem;
        height: 2.5rem;
    }
`

export const CartQuantity = styled.span`
    position: absolute;
    top: -25%;
    right: -25%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    font-size: .75rem;
    font-weight: 700;
    color: var(--first-color);
    border-radius: 50%;
    border: 3px solid var(--bg-color);
    background-color: var(--second-color);
`