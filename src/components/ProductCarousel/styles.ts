import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
`

export const Slider = styled.div`
    &:not([data-keen-slider-disabled]) {
        position: relative;
        display: flex;
        align-content: flex-start;
        width: 100%;
        border-radius: .75rem;
        overflow: hidden;
        touch-action: pan-y;
        user-select: none;
    }
`
export const Slide = styled.div`
    min-width: 268px;
    max-width: 268px;
    transform: translate3d(0px, 0px, 0px);
`

export const ArrowButton = styled.button`
    position: absolute;
    top: 50%;
    left: -3rem;
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
    right: -3rem;
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