import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StoreProduct, ProductsCarousel } from "@/features";

import * as C from "./SectionFilters.styles";

interface Product {
    id: number;
    price: number;
    product_name: string;
    category_id: number;
    photo: string;
    categoria: any;
    description: string;
}

interface Props {
    products: Product[];
}

export const SectionFilters: React.FC<Props> = ({ products }) => {
    interface Item {
        id: number;
        nome: string;
    }
    const [data, setData] = useState<string[]>([]);

    useEffect(() => {
        async function getData() {
            try {
                const res = await axios.get<Item[]>(`${import.meta.env.VITE_API_HOST}/categoria`)
                const data = res.data.map(item => item.nome);
                setData(data);
            } catch (err) {
                if (err) {
                    return alert("Ops, something wrong. Try again.")
                }
            }
        }
        getData()
    }, []);

    function filters(category: string) {
        const filtering = products.filter((product) => product.categoria.nome === category)
        return (
            <>
                {filter &&
                    <ProductsCarousel>
                        <>
                            {filtering.map((item, index) => (
                                <div key={index + 1} className="keen-slider__slide">
                                    <StoreProduct {...item} />
                                </div>
                            ))}
                        </>
                    </ProductsCarousel>
                }
            </>
        )
    }

    const [filter, setFilter] = useState(false)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setFilter(true)
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            {data.filter((category) => {
                const filtering = products.filter(
                    (product) => product.categoria.nome === category
                );
                return filtering.length > 0;
            }).map((category) => (
                <div key={category}>
                    <C.SectionTitle>{category}</C.SectionTitle>
                    {filters(category)}
                </div>
            ))}
        </>
    )
}
