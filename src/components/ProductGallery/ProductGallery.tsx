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

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;

  const StoreProducts = products.slice(start, end);


  const pageButtons = [];

  let startPage = 1;
  let endPage = 5;

  if (currentPage > 3) {
    startPage = currentPage - 2;
    endPage = currentPage + 2;
  }

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = endPage - 4;
  }

  for (let i = startPage; i <= endPage; i++) {
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
      <PaginationContainer>
        <PageButton onClick={goToFirstPage} disabled={currentPage === 1}>
          1
        </PageButton>
        <PageButton onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </PageButton>
        {pageButtons}
        <PageButton onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </PageButton>
        <PageButton onClick={goToLastPage} disabled={currentPage === totalPages}>
          {totalPages}
        </PageButton>
      </PaginationContainer>
    </>
  );
};

export default ProductGallery;
