import styled from "styled-components";

export const LinkWrapper = styled.div`   
    display: flex;
    margin-top: 2rem;

    a {
        display: flex;
        align-items: center;
        gap: .25rem;
        color: var(--alt-color);
        transition: .5s;

        svg {
            path {
                transition: .5s;
            }
        }

        &:hover {
            color: var(--second-color);

            svg {
                path {
                    stroke: var(--second-color);
                    transition: .5s;
                }
            }
        }
    }
`

