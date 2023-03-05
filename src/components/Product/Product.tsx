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
                    <C.ProductButton onClick={() => increaseCartQuantity(props.id)}>
                        Add to Cart
                    </C.ProductButton>
                ) : (
                    <div>
                        <div>
                            <button onClick={() => decreaseCartQuantity(props.id)}>-</button>
                            <div>
                                <span>{quantity}</span> in cart
                            </div>
                            <button onClick={() => increaseCartQuantity(props.id)}>+</button>
                        </div>
                        <button
                            onClick={() => removeFromCart(props.id)}
                        >
                            Remove
                        </button>
                    </div>
                )}
            </C.ProductContent>
        </C.ProductContainer>
    )
}

export default Product;