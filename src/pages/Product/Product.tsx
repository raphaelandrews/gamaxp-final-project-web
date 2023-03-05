import * as G from "../../styles/GlobalStyles";
import Product from "../../components/Product/Product";
import { useParams } from "react-router";
import axios from "axios";
import { useState } from "react";

const ProductItem = () => {
    const id = useParams();

    return (
        <G.Container>
            <Product
                title="Game of Thrones"
                price={30}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perferendis eligendi assumenda nobis quos debitis distinctio, maxime incidunt dolores fugiat nemo consequuntur iusto non quisquam perspiciatis pariatur repellat esse eius."
                id={Number(id.id)}
            />
        </G.Container>
    )
}

export default ProductItem;