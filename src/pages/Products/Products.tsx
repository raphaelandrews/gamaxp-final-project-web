import ProductGallery from '../../components/ProductGallery/ProductGallery';
import StoreProducts from "../../data/items.json";

const Products = () => {
  return (
    <ProductGallery products={StoreProducts } productsPerPage={10} />
  )
}

export default Products;