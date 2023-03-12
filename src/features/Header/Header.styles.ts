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
  transition: all 0.3s;
  @media (min-width: 800px) {
    display: none;
  }
`;

export const NavbarList = styled.ul`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    padding: 0;
    margin: 0;
    list-style: none;

    @media (min-width: 800px) {
        flex-direction: row;
        text-align: inherit;
    }
`;

export const NavbarListItem = styled.li`
    a {
        color: var(--alt-color);
        font-size: 1.25rem;
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

export const LoginModal = styled.div`
  display: inline-block;
  font-size: 1.25rem;
  text-align: center;
  border-radius: .5rem;
  padding: .5rem 1rem;
  margin-top: 4rem;
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
    display: none;
  }
`

export const Wrapper = styled.div`
  display:flex;
  align-items: center;
  gap: 2rem;
`

export const Logo = styled.img`
  width: 1.25rem;
`

export const CartTitle = styled.span`
  font-size: 1.5rem;
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

export const OffCanvasWrapper = styled.div`
  height: 100%;
  margin-top: 3rem;

  a {
    display: block;
    text-align: center;
    padding: .75rem 0;
    border-radius: .75rem;
    background-color: var(--second-color);
    transition: .5s;

    &:hover {
      background-color: var(--second-color-alt);
    }
  }
`

export const OffCanvasContent = styled.div`
  height: calc(100% - 8rem);
  margin: 1rem 0;
  overflow: hidden auto;

  ::-webkit-scrollbar {
    width: .2rem;
    border-radius: 1rem;
    background: var(--bg-alt-color);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-color: hsla(240, 7%, 78%, .2);
    transition: .5s;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: hsla(240, 7%, 78%, .4);
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

export const IconWrapper = styled.div`
  display: flex;
`