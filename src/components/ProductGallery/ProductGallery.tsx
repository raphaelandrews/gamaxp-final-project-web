import React, { useState } from 'react';
import styled from 'styled-components';


interface Product {
  id: number;
  price: number
  name: string;
  imgUrl: string;
  category: string;
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

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const FilterButton = styled.button<{ active?: boolean }>`
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
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [activeProducts, setActiveProducts] = useState(products);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    if (category == "All") {
      setActiveProducts(products);
    } else {
      setActiveProducts(products.filter((product) => product.category === selectedCategory));
    }
    setCurrentPage(1);
  };

  const totalPages = (Math.ceil(activeProducts.length / productsPerPage));

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

  const filteredProducts =
    selectedCategory === 'All' ? products : products.filter((product) => product.category === selectedCategory);

  const StoreProducts = filteredProducts.slice(start, end);
  //const StoreProducts = products.slice(start, end);
  console.log(activeProducts)
  console.log(products)
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

  if (currentPage == 1) {
    startPage = currentPage
  }

  if (currentPage == 2) {
    startPage = 1
  }

  console.log(startPage)
  console.log(endPage)

  for (let i = startPage; i <= endPage; i++) {
    pageButtons.push(
      <PageButton key={i} onClick={() => handlePageChange(i)} active={i === currentPage}>
        {i}
      </PageButton>
    );
  }

  return (
    <>
      <FilterContainer>
        <FilterButton active={selectedCategory === 'All'} onClick={() => handleCategoryFilter('All')}>
          All
        </FilterButton>
        <FilterButton active={selectedCategory === 'Terror'} onClick={() => handleCategoryFilter('Terror')}>
          Terror
        </FilterButton>
        <FilterButton active={selectedCategory === 'Romance'} onClick={() => handleCategoryFilter('Romance')}>
          Romance
        </FilterButton>
        <FilterButton active={selectedCategory === 'Ficção'} onClick={() => handleCategoryFilter('Ficção')}>
          Ficção
        </FilterButton>
        <FilterButton active={selectedCategory === 'Futurista'} onClick={() => handleCategoryFilter('Futurista')}>
          Futurista
        </FilterButton>
      </FilterContainer>

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
