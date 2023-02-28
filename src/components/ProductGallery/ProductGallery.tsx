import React, { useEffect, useState } from 'react';
import * as C from "./styles"

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
  //const StoreProducts = products.slice(start, end);

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

  for (let i = startPage; i <= endPage; i++) {
    pageButtons.push(
      <C.PageButton key={i} onClick={() => handlePageChange(i)} active={i === currentPage}>
        {i}
      </C.PageButton>
    );
  }

  return (
    <>
      <C.FilterContainer>
        <C.FilterButton active={selectedCategory === 'All'} onClick={() => handleCategoryFilter('All')}>
          All
        </C.FilterButton>
        <C.FilterButton active={selectedCategory === 'Terror'} onClick={() => handleCategoryFilter('Terror')}>
          Terror
        </C.FilterButton>
        <C.FilterButton active={selectedCategory === 'Romance'} onClick={() => handleCategoryFilter('Romance')}>
          Romance
        </C.FilterButton>
        <C.FilterButton active={selectedCategory === 'Ficção'} onClick={() => handleCategoryFilter('Ficção')}>
          Ficção
        </C.FilterButton>
        <C.FilterButton active={selectedCategory === 'Futurista'} onClick={() => handleCategoryFilter('Futurista')}>
          Futurista
        </C.FilterButton>
      </C.FilterContainer>

      <C.GalleryContainer>
        {StoreProducts.map((product) => (
          <C.ProductItem key={product.id}>
            <C.ProductImage src={product.imgUrl} alt={product.name} />
            <span>{product.name}</span>
          </C.ProductItem>
        ))}
      </C.GalleryContainer>
      <C.PaginationContainer>
        <C.PageButton onClick={goToFirstPage} disabled={currentPage === 1}>
          1
        </C.PageButton>
        <C.PageButton onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </C.PageButton>
        {pageButtons}
        <C.PageButton onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </C.PageButton>
        <C.PageButton onClick={goToLastPage} disabled={currentPage === totalPages}>
          {totalPages}
        </C.PageButton>
      </C.PaginationContainer>
    </>
  );
};

export default ProductGallery;
