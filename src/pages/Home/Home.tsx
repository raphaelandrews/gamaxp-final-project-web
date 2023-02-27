import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import { StoreProduct } from "../../components/StoreProduct/StoreProduct"
import StoreProducts from "../../data/items.json";


const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <div>
        {/*{StoreProducts.map(item => (
          <div key={item.id}>
            <StoreProduct {...item} />
          </div>
        ))}*/}
        <ProductCarousel />
      </div>
    </>
  )
}

export default Home