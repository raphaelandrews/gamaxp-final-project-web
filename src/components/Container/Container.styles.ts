import styled from "styled-components";

interface ContainerProps {
    width?: string;
    maxWidth?: string;
    margin?: string;
}

export const ContainerDefault = styled.div<ContainerProps>`
    width: ${(props) => props.width ? props.width : "90%"};
    max-width: ${(props) => props.width ? props.width : "1180px"};
    margin: ${(props) => props.width ? props.width : "0 auto"};
`