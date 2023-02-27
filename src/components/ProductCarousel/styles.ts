import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    margin-top: 2rem;
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
    display: flex;
    position: absolute;
    top: 50%;
    left: -3rem;
    transform: translateY(-50%);
    font-size: 2rem;
    line-height: 1;
    padding: .5rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

export const ArrowButtonR = styled.button`
    display: flex;
    position: absolute;
    top: 50%;
    right: -3rem;
    transform: translateY(-50%);
    font-size: 2rem;
    line-height: 1;
    padding: .5rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

export const Dots = styled.div`
    display: flex;
    padding: 1.25rem 0;
    justify-content: center;
`

export const Dot = styled.div`
    border: none;
    width: .75rem;
    height: .75rem;
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