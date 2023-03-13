import { useCart } from "@/context";
import { Button } from "@/components";

import * as C from "./ProductItem.styles";

type ProductProps = {
    id: number;
    product_name: string;
    description: string;
    price: number;
    photo: string;
    category_id: number;
    category: any;
}

export const ProductItem = ({ id, product_name, price, photo, description }: ProductProps) => {
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
                        text="Add to cart"
                        size="var(--fs-6)"
                        sizeMD="var(--fs-7)"
                        color="var(--bg-color)"
                        width="100%"
                        margin="2rem 0 0"
                        padding="1rem .75rem"
                        border="none"
                        borderRadius=".5rem"
                        backgroundColor="var(--second-color)"
                        hoverBg="var(--second-color-alt)"
                    />

                ) : (
                    <C.ProductButtons>
                        <C.QuantityButtons>
                            <Button
                                action={() => increaseCartQuantity(id)}
                                text="+"
                                color="var(--first-color)"
                                size="var(--fs-6)"
                                sizeMD="var(--fs-7)"
                                padding=".5rem"
                                border="none"
                                backgroundColor="transparent"
                            />
                            <div>
                                <span>{quantity}</span> in cart
                            </div>
                            <Button
                                action={() => decreaseCartQuantity(id)}
                                text="-"
                                color="var(--first-color)"
                                size="var(--fs-6)"
                                sizeMD="var(--fs-7)"
                                padding=".5rem"
                                border="none"
                                backgroundColor="transparent" />
                        </C.QuantityButtons>
                        <Button
                            action={() => removeFromCart(id)}
                            text="Remove"
                            size="var(--fs-6)"
                            sizeMD="var(--fs-7)"
                            color="var(--bg-color)"
                            padding="1rem 1.5rem"
                            border="none"
                            borderRadius=".5rem"
                            backgroundColor="var(--third-color)"
                            hoverBg="var(--third-color-alt)"
                        />
                    </C.ProductButtons>
                )}
            </C.ProductContent>
        </C.ProductContainer>
    )
}
