import { useCart } from "@/context";
import { Button } from "@/components";

import * as C from "./ProductItem.styles";

import img from "../../assets/img/game-of-thrones.jpg";

type ProductProps = {
    id: number;
    product_name: string;
    description: string;
    price: number;
    photo: string;
    category_id: number;
    category: any;
}

export const ProductItem = ({ id, product_name, price, photo, description, category_id, category }: ProductProps) => {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useCart()
    const quantity = getItemQuantity(id)

    const productImg = `/src/assets/img/${photo}`

    return (
        <C.ProductContainer>
            <C.ProducImgWrapper>
                <C.ProductImg src={productImg} alt="" />
            </C.ProducImgWrapper>
            <C.ProductContent>
                <C.ProductTitle>
                    {product_name}
                </C.ProductTitle>
                <C.ProductPrice>
                    ${price}
                </C.ProductPrice>
                <C.ProductDescription>
                    {description}
                </C.ProductDescription>
                {quantity === 0 ? (
                    <Button
                        action={() => increaseCartQuantity(id)}
                        backgroundColor="var(--second-color)"
                        marginTop="2rem"
                        width="100%"
                        padding="1rem .75rem"
                        hoverBg="var(--second-color-alt)"
                        text="Add to cart"
                    />

                ) : (
                    <C.ProductButtons>
                        <C.QuantityButtons>
                            <Button action={() => increaseCartQuantity(id)} backgroundColor="transparent" padding=".5rem" text="+" />
                            <div>
                                <span>{quantity}</span> in cart
                            </div>
                            <C.ProductButton onClick={() => decreaseCartQuantity(id)} backgroundColor="transparent" padding=".5rem">-</C.ProductButton>
                        </C.QuantityButtons>
                        <Button
                            action={() => removeFromCart(id)}
                            backgroundColor="var(--third-color)"
                            padding="1rem 1.5rem"
                            text="Remove"
                        />
                    </C.ProductButtons>
                )}
            </C.ProductContent>
        </C.ProductContainer>
    )
}
