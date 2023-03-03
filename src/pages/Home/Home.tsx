import ProductCarousel from "../../components/ProductsCarousel/ProductsCarousel";
import { StoreProduct } from "../../components/StoreProduct/StoreProduct";
import StoreProducts from "../../data/items.json";


const Home = () => {
  const romance = StoreProducts.filter((product) => product.category === 'Romance')
  const terror = StoreProducts.filter((product) => product.category === 'Terror')
  const futurista = StoreProducts.filter((product) => product.category === 'Ficção')
  const ficcao = StoreProducts.filter((product) => product.category === 'Futurista')
  
  return (
    <>
      <ProductCarousel>
        <>
          {romance.map((item, index) => (
            <div key={index + 1} className="keen-slider__slide">
              <StoreProduct {...item} />
            </div>
          ))}
        </>
      </ProductCarousel>

      <ProductCarousel>
        <>
          {ficcao.map((item, index) => (
            <div key={index + 1} className="keen-slider__slide">
              <StoreProduct {...item} />
            </div>
          ))}
        </>
      </ProductCarousel>

      <ProductCarousel>
        <>
          {terror.map((item, index) => (
            <div key={index + 1} className="keen-slider__slide">
              <StoreProduct {...item} />
            </div>
          ))}
        </>
      </ProductCarousel>

      <ProductCarousel>
        <>
          {futurista.map((item, index) => (
            <div key={index + 1} className="keen-slider__slide">
              <StoreProduct {...item} />
            </div>
          ))}
        </>
      </ProductCarousel>
    </>
  )
}

export default Home;