import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
`

export const Slider = styled.div`

`

export const Slide = styled.div`
    
`

export const ArrowButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    line-height: 1;
    padding: 1rem;
    background-color: red;
    border: none;
    cursor: pointer;
`;

export const ArrowButtonR = styled.button`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    font-size: 2rem;
    line-height: 1;
    padding: 1rem;
    background-color: red;
    border: none;
    cursor: pointer;
`;

export const Dots = styled.div`
    display: flex;
    padding: 10px 0;
    justify-content: center;
`

export const Dot = styled.div`
    border: none;
    width: 10px;
    height: 10px;
    background: #c5c5c5;
    border-radius: 50%;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &:active {
        background: #000;
    }
`