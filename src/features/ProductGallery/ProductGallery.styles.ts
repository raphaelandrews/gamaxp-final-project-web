import styled from 'styled-components';

export const ProductGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;

  @media (min-width: 800px) {
    flex-direction: row;
    gap: 4rem;
  }
`

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 20px;

  @media (min-width: 800px) {
    flex-direction: column;
  }
`;

export const FilterButton = styled.button<{ active?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: var(--fs-7);
  color: ${({ active }) => (active ? 'var(--second-color)' : 'var(--alt-color)')};
  border: none;
  background-color: transparent;
  transition: .5s;
  cursor: ${({ active }) => (active ? 'default' : 'pointer')};

  &:hover {
    color: ${({ active }) => (active ? 'var(--second-color)' : 'var(--first-color)')};
  }
`;

export const GalleryContainer = styled.div`
  width: 100%;
`

export const GalleryContent = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  margin-bottom: 1.25rem;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .75rem;
  margin-top: 2rem;
`;

export const PageButton = styled.button<{ active?: boolean }>`
  font-size: var(--fs-5);
  color: ${({ active }) => (active ? 'var(--second-color)' : 'var(--alt-color)')};
  margin: 0 5px;
  border: none;
  background-color: transparent;
  transition: .5s;
  cursor: ${({ active }) => (active ? 'default' : 'pointer')};

  &:hover {
    color: ${({ active }) => (active ? 'var(--second-color)' : 'var(--first-color)')};
  }

  svg {
    path {
      &:hover {
        stroke: var(--first-color);
      }
    }
  }
`;