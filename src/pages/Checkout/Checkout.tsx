import * as G from "../../styles/GlobalStyles";
import * as C from "./styles";
import MultiStepForm from '../../components/MultistepForm/MultistepForm';
import { useCart } from '../../context/CartContext';
import { CartProduct } from "../../components/CartProduct/CartProduct";

const Checkout = () => {
  const { CartProducts } = useCart();
  return (
    <G.Container>
      <C.Title>Checkout</C.Title>
      <MultiStepForm />
      <C.CartContent>
        {CartProducts.map(item => (
          <CartProduct key={item.id} {...item} />
        ))}
      </C.CartContent>
    </G.Container>
  )
}

export default Checkout;