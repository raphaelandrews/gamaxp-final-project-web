
import { useShoppingCart } from "../../context/CartContext/CartProvider"
import { formatCurrency } from "../../context/CartContext/formatCurrency"

type ProductProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

export function Product({ id, name, price, imgUrl }: ProductProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()
  const quantity = getItemQuantity(id)

  return (
    <div className="h-100">
      <img
        
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </div>
        <div className="mt-auto">
          {quantity === 0 ? (
            <button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <button onClick={() => decreaseCartQuantity(id)}>-</button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <button onClick={() => increaseCartQuantity(id)}>+</button>
              </div>
              <button
                onClick={() => removeFromCart(id)}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
