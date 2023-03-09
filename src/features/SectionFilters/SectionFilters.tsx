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
    category: any;
    description: string;
}

interface Props {
    products: Product[];
}

export const SectionFilters: React.FC<Props> = ({ products }) => {
    interface Item {
        id: number;
        category_name: string;
    }
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        axios.get<Item[]>(`${import.meta.env.VITE_API_HOST}/categoria`)
            .then(response => {
                const data = response.data.map(item => item.category_name);
                setData(data);
            })
            .catch(error => console.log(error));
    }, []);

    function filters(category: string) {
        const filtering = products.filter((product) => product.category.category_name === category)
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
                    (product) => product.category.category_name === category
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
