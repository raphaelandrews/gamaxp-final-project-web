import ProductGallery from '../../components/ProductGallery/ProductGallery';
import StoreProducts from "../../data/items.json";
import * as G from "../../styles/GlobalStyles";
import * as C from "./Products.styles";

const Products = () => {
  return (
    <G.Container>
      <C.Title>Livros</C.Title>
      <ProductGallery products={StoreProducts} productsPerPage={12} />
    </G.Container>
  )
}

export default Products;