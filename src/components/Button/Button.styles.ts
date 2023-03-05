import styled from "styled-components";

interface ButtonProps {
    weight?: string;
    textTransform?: string;
    width?:string;
    height?: string;
    padding?: string;
    marginTop?: string;
    borderRadius?: string;
    backgroundColor?: string;
    hoverBg?: string;
}

export const ButtonDefault = styled.button<ButtonProps>`
    font-size: 1rem;
    font-weight: ${(props) => props.weight ? props.weight : 600};
    color: var(--first-color);
    text-transform: ${(props) => props.textTransform};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: .75rem;
    padding: ${(props) => props.padding};
    margin-top: ${(props) => props.marginTop};
    border-radius: ${(props) => props.borderRadius};
    border: none;
    background-color: ${(props) => props.backgroundColor};
    transition: .5s;
    cursor: pointer;

    &:hover {
        background-color:  ${(props) => props.hoverBg};
    }
`