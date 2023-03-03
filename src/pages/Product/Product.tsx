import * as C from "../../styles/GlobalStyles";
import ProductCarousel from "../../components/Product/Product";

const Product = () => {
    return (
        <C.Container>
            <ProductCarousel
                title="Game of Thrones"
                price={30}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perferendis eligendi assumenda nobis quos debitis distinctio, maxime incidunt dolores fugiat nemo consequuntur iusto non quisquam perspiciatis pariatur repellat esse eius."
                id={4}
            />
        </C.Container>
    )
}
export default Product;