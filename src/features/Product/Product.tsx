import * as C from "./Product.styles";
import { formatCurrency } from "../../util/formatCurrency";

import img from "../../assets/img/game-of-thrones.jpg";
import { useCart } from "../../context/CartContext";

interface ProductProps {
    title: string;
    description: string;
    price: number;
    id: number;
    /* name: string
     imgUrl: string*/
}


const Product = (props: ProductProps) => {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useCart()
    const quantity = getItemQuantity(props.id)

    return (
        <C.ProductContainer>
            <C.ProducImgWrapper>
                <C.ProductImg src={img} alt="" />
            </C.ProducImgWrapper>
            <C.ProductContent>
                <C.ProductTitle>
                    {props.title}
                </C.ProductTitle>
                <C.ProductPrice>
                    {formatCurrency(props.price)}
                </C.ProductPrice>
                <C.ProductDescription>
                    {props.description}
                </C.ProductDescription>
                {quantity === 0 ? (
                    <C.ProductButton
                        onClick={() => increaseCartQuantity(props.id)}
                        backgroundColor="var(--second-color)"
                        marginTop="2rem"
                        width="100%"
                        padding="1rem .75rem"
                        hoverBg="var(--second-color-alt)"
                    >
                        Add to Cart
                    </C.ProductButton>
                ) : (
                    <C.ProductButtons>
                        <C.QuantityButtons>
                            <C.ProductButton onClick={() => increaseCartQuantity(props.id)} backgroundColor="transparent" padding=".5rem">+</C.ProductButton>
                            <div>
                                <span>{quantity}</span> in cart
                            </div>
                            <C.ProductButton onClick={() => decreaseCartQuantity(props.id)} backgroundColor="transparent" padding=".5rem">-</C.ProductButton>
                        </C.QuantityButtons>
                        <C.ProductButton
                            onClick={() => removeFromCart(props.id)}
                            backgroundColor="var(--third-color)"
                            padding="1rem 1.5rem"
                        >
                            Remove
                        </C.ProductButton>
                    </C.ProductButtons>
                )}
            </C.ProductContent>
        </C.ProductContainer>
    )
}

export default Product;