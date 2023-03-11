import styled from "styled-components";

export const Slider = styled.div`
    &:not([data-keen-slider-disabled]) {
        position: relative;
        display: flex;
        align-content: flex-start;
        width: 100%;
        height: 100%;
       // border-radius: .75rem;
        overflow: hidden;
        touch-action: pan-y;
        user-select: none;
    }
`
export const Slide = styled.div`
    min-width: 298px;
    max-width: 298px;
    transform: translate3d(0px, 0px, 0px);
`

interface ArrowButtonProps {
    left?: string;
    right?: string;
}

export const ArrowButton = styled.button<ArrowButtonProps>`
    display: flex;
    position: absolute;
    top: 50%;
    right: ${(props) => props.right ? props.right : "inherit"};
    left: ${(props) => props.left ? props.left : "inherit"};
    transform: translateY(-50%);
    font-size: 2rem;
    line-height: 1;
    padding: .5rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;
