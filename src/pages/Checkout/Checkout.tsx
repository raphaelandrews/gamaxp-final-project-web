import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as G from "../../styles/global";
import * as C from "./styles";

interface AddressFormValues {
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

interface ShippingFormValues {
  shippingMethod: string;
  deliveryDate: string;
}

interface PaymentFormValues {
  cardNumber: string;
  cardholderName: string;
  expirationDate: string;
  cvv: string;
}

interface FormData {
  address: AddressFormValues;
  shipping: ShippingFormValues;
  payment: PaymentFormValues;
}

const initialValues: FormData = {
  address: {
    street: '',
    city: '',
    state: '',
    zipcode: '',
  },
  shipping: {
    shippingMethod: '',
    deliveryDate: '',
  },
  payment: {
    cardNumber: '',
    cardholderName: '',
    expirationDate: '',
    cvv: '',
  },
};



const MultiStepForm = () => {
  const [step, setStep] = useState(1);


  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (values: FormData) => {
    // Do something with the form values, such as submitting them to a server
    console.log(values);
  };

  const [isAddressColor, setIsAddressColor] = useState("active")
  const [isShippingColor, setIsShippingColor] = useState("normal")
  const [isPaymentColor, setIsPaymentColor] = useState("normal")

  const handleAddressStep = (step: number) => {
    if (step == 1) {
      setStep(1)
      setIsAddressColor("active")
      setIsShippingColor("normal")
      setIsPaymentColor("normal")
    } else if (step == 2) {
      setStep(2)
      setIsAddressColor("normal")
      setIsShippingColor("active")
      setIsPaymentColor("normal")
    } else {
      setStep(3)
      setIsAddressColor("normal")
      setIsShippingColor("normal")
      setIsPaymentColor("active")
    }
  };

  useEffect(() => {
    handleAddressStep(step);
  }, [handlePrevStep]);

  return (
    <G.Container>
      <C.Title>Checkout</C.Title>
      <C.CheckoutSteps>
        <C.Step onClick={() => handleAddressStep(1)} color={isAddressColor}>Address</C.Step>
        <C.Step onClick={() => handleAddressStep(2)} color={isShippingColor}>Shipping</C.Step>
        <C.Step onClick={() => handleAddressStep(3)} color={isPaymentColor}>Payment</C.Step>
      </C.CheckoutSteps>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form>
            {step === 1 && (
              <>
                <label htmlFor="address.street">Street:</label>
                <Field id="address.street" name="address.street" />

                <label htmlFor="address.city">City:</label>
                <Field id="address.city" name="address.city" />

                <label htmlFor="address.state">State:</label>
                <Field id="address.state" name="address.state" />

                <label htmlFor="address.zipcode">Zipcode:</label>
                <Field id="address.zipcode" name="address.zipcode" />
              </>
            )}

            {step === 2 && (
              <>
                <label htmlFor="shipping.shippingMethod">Shipping Method:</label>
                <Field id="shipping.shippingMethod" name="shipping.shippingMethod" />

                <label htmlFor="shipping.deliveryDate">Delivery Date:</label>
                <Field id="shipping.deliveryDate" name="shipping.deliveryDate" />
              </>
            )}

            {step === 3 && (
              <>
                <label htmlFor="payment.cardNumber">Card Number:</label>
                <Field id="payment.cardNumber" name="payment.cardNumber" />

                <label htmlFor="payment.cardholderName">Cardholder Name:</label>
                <Field id="payment.cardholderName" name="payment.cardholderName" />

                <label htmlFor="payment.expirationDate">Expiration Date:</label>
                <Field id="payment.expirationDate" name="payment.expirationDate" />

                <label htmlFor="payment.cvv">CVV:</label>
                <Field id="payment.cvv" name="payment.cvv" />
              </>
            )}

            {step > 1 && (
              <button type="button" onClick={handlePrevStep}>
                Previous
              </button>
            )}

            {step < 3 ? (
              <button type="button" onClick={handleNextStep}>
                Next
              </button>
            ) : (
              <button type="submit">Submit</button>
            )}
          </Form>
        )}
      </Formik>
    </G.Container>
  )
}

export default MultiStepForm;