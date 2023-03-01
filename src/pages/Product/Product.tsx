import * as C from "../../styles/global";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";

const Product = () => {
    return (
        <C.Container>
            <ProductCarousel
                title="Game of Thrones"
                price={30}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perferendis eligendi assumenda nobis quos debitis distinctio, maxime incidunt dolores fugiat nemo consequuntur iusto non quisquam perspiciatis pariatur repellat esse eius."
                id={1}
            />
        </C.Container>
    )
}
export default Product;