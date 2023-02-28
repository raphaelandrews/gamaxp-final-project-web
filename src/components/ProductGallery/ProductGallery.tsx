import React, { useState } from 'react';
import styled from 'styled-components';



interface Product {
  id: number;
  price: number
  name: string;
  imgUrl: string;
}

interface Props {
  products: Product[];
  productsPerPage: number;
}

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const PageButton = styled.button<{ active?: boolean }>`
  margin: 0 5px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: ${({ active }) => (active ? '#2196f3' : 'transparent')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  cursor: ${({ active }) => (active ? 'default' : 'pointer')};
`;

const ProductGallery: React.FC<Props> = ({ products, productsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;

  const StoreProducts = products.slice(start, end);


  const pageButtons = [];

  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <PageButton key={i} onClick={() => handlePageChange(i)} active={i === currentPage}>
        {i}
      </PageButton>
    );
  }

  return (
    <>
      <GalleryContainer>
        {StoreProducts.map((product) => (
          <ProductItem key={product.id}>
            <ProductImage src={product.imgUrl} alt={product.name} />
            <span>{product.name}</span>
          </ProductItem>
        ))}
      </GalleryContainer>
      <PaginationContainer>{pageButtons}</PaginationContainer>
    </>
  );
};

export default ProductGallery;
