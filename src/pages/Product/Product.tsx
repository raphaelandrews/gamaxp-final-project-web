import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

import { ProductItem } from "@/features";

import { G } from "@/styles";

type ProductData = {
    id: number;
    product_name: string;
    description: string;
    price: number;
    photo: string;
    category_id: number;
    category: any;
}

export const Product = () => {
    const { id } = useParams<{ id: string }>();

    const [data, setData] = useState<ProductData | null>(null);

    async function getData() {
        const res = await axios.get<ProductData>(`${import.meta.env.VITE_API_HOST}/produto/${id}`);
        setData(res.data);
    }

    useEffect(() => {
        getData();
    }, [id]);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <G.Container>
            <ProductItem
                product_name={data.product_name}
                price={data.price}
                description={data.description}
                id={Number(id)}
                photo={data.photo}
                category={data.category}
                category_id={data.category_id}
            />
        </G.Container>
    )
}
