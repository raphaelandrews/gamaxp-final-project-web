import * as G from "../../styles/global";
import * as C from "./styles";
import MultiStepForm from '../../components/MultistepForm/MultistepForm';

const Checkout = () => {
  return (
    <G.Container>
      <C.Title>Checkout</C.Title>
      <MultiStepForm />     
    </G.Container>
  )
}

export default Checkout;