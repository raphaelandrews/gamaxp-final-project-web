import styled from "styled-components";

interface ButtonProps {
    backgroundColor?: string;
    marginTop?: string;
    width?:string;
    padding?: string;
    hoverBg?: string;
}

export const ButtonDefault = styled.button<ButtonProps>`
    font-size: 1rem;
    font-weight: 600;
    color: var(--first-color);
    width: ${(props) => props.width};
    border-radius: .75rem;
    padding: ${(props) => props.padding};
    margin-top: ${(props) => props.marginTop};
    border: none;
    background-color: ${(props) => props.backgroundColor};
    transition: .5s;
    cursor: pointer;

    &:hover {
        background-color:  ${(props) => props.hoverBg};
    }
`