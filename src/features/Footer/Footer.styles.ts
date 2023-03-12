import styled from "styled-components";

export const FooterWrapper = styled.footer`
    background-color: var(--bg-color)
`;

export const FooterContainer = styled.div`
    margin-top: 3rem;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8rem;
    width: 100%;
    @media (min-width: 800px) {
        height: 6rem;
      }
`;

export const SignupFooter = styled.div` 

.argument {
      color: var(--alt-color);
}

a {
      color: var(--alt-color);
      font-size: var(--fs-7);
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
          font-size: var(--fs-6);
      }
  }
`
;

export const ShopList = styled.div`
      display: flex;
      flex-flow: row wrap;
      align-items: center;
`

export const ShopItem = styled.div`
      padding: 1rem;
      a {
            color: var(--alt-color);
            font-size: var(--fs-5);
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
                font-size: var(--fs-5);
            }
        }
`;

export const Copyrights = styled.div`
      position: relative;
      text-align: center;
      font-size: var(--fs-4);
      color: var(--alt-color)
`;