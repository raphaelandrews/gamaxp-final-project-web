import * as G from "../../styles/GlobalStyles";
import * as C from "./Home.styles";
import ProductCarousel from "../../features/ProductsCarousel/ProductsCarousel";
import { StoreProduct } from "../../features/StoreProduct/StoreProduct";
import StoreProducts from "../../data/items.json";


const Home = () => {
  const romance = StoreProducts.filter((product) => product.category === 'Romance')
  const terror = StoreProducts.filter((product) => product.category === 'Terror')
  const futurista = StoreProducts.filter((product) => product.category === 'Ficção')
  const ficcao = StoreProducts.filter((product) => product.category === 'Futurista')
  
  return (
    <G.Container>
    
      <C.SectionTitle>Romance</C.SectionTitle>
      <ProductCarousel>
        <>
          {romance.map((item, index) => (
            <div key={index + 1} className="keen-slider__slide">
              <StoreProduct {...item} />
            </div>
          ))}
        </>
      </ProductCarousel>

      <C.SectionTitle>Fiction</C.SectionTitle>
      <ProductCarousel>
        <>
          {ficcao.map((item, index) => (
            <div key={index + 1} className="keen-slider__slide">
              <StoreProduct {...item} />
            </div>
          ))}
        </>
      </ProductCarousel>

      <C.SectionTitle>Horror</C.SectionTitle>
      <ProductCarousel>
        <>
          {terror.map((item, index) => (
            <div key={index + 1} className="keen-slider__slide">
              <StoreProduct {...item} />
            </div>
          ))}
        </>
      </ProductCarousel>

      <C.SectionTitle>Futuristic</C.SectionTitle>
      <ProductCarousel>
        <>
          {futurista.map((item, index) => (
            <div key={index + 1} className="keen-slider__slide">
              <StoreProduct {...item} />
            </div>
          ))}
        </>
      </ProductCarousel>
    </G.Container>
  )
}

export default Home;