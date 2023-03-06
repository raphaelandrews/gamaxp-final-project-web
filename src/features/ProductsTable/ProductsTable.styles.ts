import styled from "styled-components";

export const TableWrapper = styled.div`
    a {
        display: inline-block;
        padding: .75rem 1.25rem;
        margin-bottom: 2rem;
        border-radius: .75rem;
        border: 2px solid var(--bg-alt-color);
        background-color: var(--second-color);
        transition: .5s;

        &:hover {
            background-color: var(--second-color-alt);
        }
    }

    img {
        width: 3rem;
        height: 3rem;
        border-radius: .75rem;
        object-fit: cover;
    }

    .MuiPaper-root {
        box-shadow: none;
    }

    .MuiToolbar-root {
        color: white;
        background-color: var(--bg-color) !important;
        box-shadow: none;
    }

   .MuiTableRow-root {
        background-color: var(--bg-color) !important;
   }

   .MuiTableCell-root {
        color: var(--first-color) !important;
        border: none !important;
   }

   .MuiButtonBase-root {
        color: var(--first-color) !important;
   }

   .MuiSvgIcon-root  {
    color: var(--alt-color);
   }
`

export const CellWrapper = styled.div `
    display: flex;
    align-items: center;
    gap: 1rem;
`