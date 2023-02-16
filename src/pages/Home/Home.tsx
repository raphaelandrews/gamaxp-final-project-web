import { Product } from "../../components/Product/Product";
import storeItems from "../../context/CartContext/items.json";

const Home = () => {
  return (
    <>
      <h1>Store</h1>
      <div className="g-3">
        {Product.map(item => (
          <div key={item.id}>
            <Product {...item} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Home