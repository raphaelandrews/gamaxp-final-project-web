import React, { useEffect, useState } from 'react';
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
    const romance = products.filter((product) => product.category.category_name === 'Romance')
    const terror = products.filter((product) => product.category.category_name === 'Terror')
    const futurista = products.filter((product) => product.category.category_name === 'Ficção')
    const ficcao = products.filter((product) => product.category.category_name === 'Futurista')

    const [filter, setFilter] = useState(false)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setFilter(true)
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            {filter &&
                <>
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
                </>
            }
            <C.SectionTitle>Fiction</C.SectionTitle>
            <>
                <>
                    {ficcao.map((item, index) => (
                        <div key={index + 1} className="keen-slider__slide">
                            <StoreProduct {...item} />
                        </div>
                    ))}
                </>
            </>
            <C.SectionTitle>Horror</C.SectionTitle>
            <>
                <>
                    {terror.map((item, index) => (
                        <div key={index + 1} className="keen-slider__slide">
                            <StoreProduct {...item} />
                        </div>
                    ))}
                </>
            </>
            <C.SectionTitle>Futuristic</C.SectionTitle>
            <>
                <>
                    {futurista.map((item, index) => (
                        <div key={index + 1} className="keen-slider__slide">
                            <StoreProduct {...item} />
                        </div>
                    ))}
                </>
            </>
        </>
    )
}
