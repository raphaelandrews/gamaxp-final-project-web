import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
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
  margin-top: 20px;
`;

export const PageButton = styled.button<{ active?: boolean }>`
  margin: 0 5px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: ${({ active }) => (active ? '#2196f3' : 'transparent')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  cursor: ${({ active }) => (active ? 'default' : 'pointer')};
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const FilterButton = styled.button<{ active?: boolean }>`
  margin: 0 5px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: ${({ active }) => (active ? '#2196f3' : 'transparent')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  cursor: ${({ active }) => (active ? 'default' : 'pointer')};
`;