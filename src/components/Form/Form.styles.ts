import styled from "styled-components";

interface FormProps {
    display?: string;
    flexDirection?: string;
    width?: string;
    maxWidth?: string;
    margin?: string;
}

export const FormDefault =styled.form<FormProps>`
    display: ${(props) => props.display ? props.display : 'flex'};
    flex-direction: ${(props) => props.flexDirection ? props.flexDirection : 'column'};
    width: ${(props) => props.width ? props.width : '400px'};
    max-width: ${(props) => props.maxWidth ? props.maxWidth : '480%'};
    margin: ${(props) => props.margin ? props.margin : '2rem 0 0'};
`