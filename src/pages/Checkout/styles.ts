import styled from "styled-components";

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 2rem;
`

export const CheckoutSteps = styled.div`
    display: flex;
    gap: 2rem;
    margin-top: 1em;
`

interface CoresStep {
    [key: string]: string;
}

const coresStep: CoresStep = {
    active: "green",
    normal: "black"
};

interface StepDefaultProps {
    color: string;
}

export const Step = styled.span<StepDefaultProps>`
 color: ${(props) => coresStep[props.color]};
`