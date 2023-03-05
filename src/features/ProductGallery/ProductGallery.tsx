import React, { useEffect, useState } from 'react';
import { StoreProduct } from '../../features/StoreProduct/StoreProduct';
import * as C from "./ProductGallery.styles"

interface Product {
  id: number;
  price: number;
  name: string;
  imgUrl: string;
  category: string;
  description: string;
}

interface Props {
  products: Product[];
  productsPerPage: number;
}

const ProductGallery: React.FC<Props> = ({ products, productsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [activeProducts, setActiveProducts] = useState(products);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
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


  useEffect(() => {
    if (selectedCategory == "All") {
      setActiveProducts(products);
    } else {
      setActiveProducts(products.filter((product) => product.category === selectedCategory));
    }
  }, [selectedCategory]);

  const StoreProducts = filteredProducts.slice(start, end);

  const pageButtons = [];

  let startPage = 1;
  let endPage = 5;

  if (currentPage > 3) {
    startPage = currentPage - 2;
    endPage = currentPage + 2;
  }

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = endPage - (totalPages - 1);
  }

  if (currentPage == 1) {
    startPage = currentPage
  }

  if (currentPage == 2) {
    startPage = 1
  }

  for (let i = startPage; i <= endPage; i++) {
    pageButtons.push(
      <C.PageButton key={i} onClick={() => handlePageChange(i)} active={i === currentPage}>
        {i}
      </C.PageButton>
    );
  }

  return (
    <C.ProductGalleryContainer>
      <C.FilterContainer>
        <C.FilterButton active={selectedCategory === 'All'} onClick={() => handleCategoryFilter('All')}>
          All
        </C.FilterButton>
        <C.FilterButton active={selectedCategory === 'Terror'} onClick={() => handleCategoryFilter('Terror')}>
          Horror
        </C.FilterButton>
        <C.FilterButton active={selectedCategory === 'Romance'} onClick={() => handleCategoryFilter('Romance')}>
          Romance
        </C.FilterButton>
        <C.FilterButton active={selectedCategory === 'Ficção'} onClick={() => handleCategoryFilter('Ficção')}>
          Fiction
        </C.FilterButton>
        <C.FilterButton active={selectedCategory === 'Futurista'} onClick={() => handleCategoryFilter('Futurista')}>
          Futuristic
        </C.FilterButton>
      </C.FilterContainer>

      <C.GalleryContainer>
        <C.GalleryContent>
          {StoreProducts.map((product) => (
            <C.ProductItem key={product.id}>
              <StoreProduct {...product} />
            </C.ProductItem>
          ))}
        </C.GalleryContent>
        <C.PaginationContainer>
          <C.PageButton onClick={goToFirstPage} disabled={currentPage === 1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20" height="20"
              viewBox="0 0 24 24"
              fill="none">
              <path
                d="M20.24 7.22v9.57c0 1.96-2.13 3.19-3.83 2.21l-4.15-2.39-4.15-2.4c-1.7-.98-1.7-3.43 0-4.41l4.15-2.4 4.15-2.39c1.7-.98 3.83.24 3.83 2.21ZM3.76 18.18V5.82"
                stroke="var(--alt-color)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
              </path>
            </svg>
          </C.PageButton>
          <C.PageButton onClick={goToPreviousPage} disabled={currentPage === 1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24"
              viewBox="0 0 24 24"
              fill="none">
              <path
                stroke="var(--alt-color)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M18 12v2.67c0 3.31-2.35 4.67-5.22 3.01l-2.31-1.34L8.16 15c-2.87-1.66-2.87-4.37 0-6.03l2.31-1.34 2.31-1.34C15.65 4.66 18 6.01 18 9.33V12z">
              </path>
            </svg>
          </C.PageButton>
          {pageButtons}
          <C.PageButton onClick={goToNextPage} disabled={currentPage === totalPages}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none">
              <path
                stroke="var(--alt-color)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M6 12V9.33c0-3.31 2.35-4.67 5.22-3.01l2.31 1.34L15.84 9c2.87 1.66 2.87 4.37 0 6.03l-2.31 1.34-2.31 1.34C8.35 19.34 6 17.99 6 14.67V12z">
              </path>
            </svg>
          </C.PageButton>
          <C.PageButton onClick={goToLastPage} disabled={currentPage === totalPages}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none">
              <path d="M3.76 7.22v9.57c0 1.96 2.13 3.19 3.83 2.21l4.15-2.39 4.15-2.4c1.7-.98 1.7-3.43 0-4.41l-4.15-2.4-4.15-2.39c-1.7-.98-3.83.24-3.83 2.21ZM20.24 18.18V5.82"
                stroke="var(--alt-color)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
              </path>
            </svg>
          </C.PageButton>
        </C.PaginationContainer>
      </C.GalleryContainer>
    </C.ProductGalleryContainer>

  );
};

export default ProductGallery;
