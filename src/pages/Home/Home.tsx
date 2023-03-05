import { StoreProduct, ProductsCarousel } from "@/features";

import { G } from "@/styles";
import * as C from "./Home.styles";

import StoreProducts from "../../data/items.json";


export const Home = () => {
  const romance = StoreProducts.filter((product) => product.category === 'Romance')
  const terror = StoreProducts.filter((product) => product.category === 'Terror')
  const futurista = StoreProducts.filter((product) => product.category === 'Ficção')
  const ficcao = StoreProducts.filter((product) => product.category === 'Futurista')
  
  return (
    <G.Container>
    
      <C.SectionTitle>Romance</C.SectionTitle>
      <ProductsCarousel>
        <>
          {romance.map((item, index) => (
            <div key={index + 1} className="keen-slider__slide">
              <StoreProduct {...item} />
            </div>
          ))}
        </>
      </ProductsCarousel>

      <C.SectionTitle>Fiction</C.SectionTitle>
      <ProductsCarousel>
        <>
          {ficcao.map((item, index) => (
            <div key={index + 1} className="keen-slider__slide">
              <StoreProduct {...item} />
            </div>
          ))}
        </>
      </ProductsCarousel>

      <C.SectionTitle>Horror</C.SectionTitle>
      <ProductsCarousel>
        <>
          {terror.map((item, index) => (
            <div key={index + 1} className="keen-slider__slide">
              <StoreProduct {...item} />
            </div>
          ))}
        </>
      </ProductsCarousel>

      <C.SectionTitle>Futuristic</C.SectionTitle>
      <ProductsCarousel>
        <>
          {futurista.map((item, index) => (
            <div key={index + 1} className="keen-slider__slide">
              <StoreProduct {...item} />
            </div>
          ))}
        </>
      </ProductsCarousel>
    </G.Container>
  )
}
