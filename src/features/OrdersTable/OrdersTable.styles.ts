import styled from "styled-components";

export const TableWrapper = styled.div`
    table {
        a {
            display: block;
            width: 100%;
            height: 100%;
            padding: 1rem;
        }
    }

    img {
        width: 3rem;
        height: 3rem;
        border-radius: .75rem;
        object-fit: cover;
    }

    .MuiInputBase-input {
        color: var(--first-color);
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
        padding: 0 !important;
        border: none !important;
   }

   thead {
    .MuiTableCell-root {
        padding: 1rem !important;
    }
   }

   .MuiButtonBase-root {
        color: var(--first-color) !important;
   }

   .MuiSvgIcon-root  {
    color: var(--alt-color) !important;
   }
`

export const CellWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const LinkWrapper = styled.div`
        a {
        display: inline-block;
        padding: .75rem 1.25rem;
        border-radius: .75rem;
        border: 2px solid var(--bg-alt-color);
        background-color: var(--second-color);
        transition: .5s;

        &:hover {
            background-color: var(--second-color-alt);
        }
    }
`