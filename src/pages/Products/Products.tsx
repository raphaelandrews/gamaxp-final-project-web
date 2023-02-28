import ProductGallery from '../../components/ProductGallery/ProductGallery';
import StoreProducts from "../../data/items.json";

const Products = () => {
  return (
    <ProductGallery products={StoreProducts } productsPerPage={5} />
  )
}

export default Products;