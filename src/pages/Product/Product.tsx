import { useParams } from "react-router";

import { ProductItem } from "@/features";

import  { G } from "@/styles";

export const Product = () => {
    const id = useParams();

    return (
        <G.Container>
            <ProductItem
                title="Game of Thrones"
                price={30}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perferendis eligendi assumenda nobis quos debitis distinctio, maxime incidunt dolores fugiat nemo consequuntur iusto non quisquam perspiciatis pariatur repellat esse eius."
                id={Number(id.id)}
            />
        </G.Container>
    )
}
