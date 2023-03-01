import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

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

  const handleAddressStep = (step: string) => {
    if (step == "Address") {
      setStep(1)
    } else if (step == "Shipping") {
      setStep(2)
    } else {
      setStep(3)
    }
  };

  return (
    <>
    <div>
      <div onClick={() => handleAddressStep("Address")}>Adress</div>
      <div onClick={() => handleAddressStep("Shipping")}>Shipping</div>
      <div onClick={() => handleAddressStep("")}>Payment</div>
    </div>
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
    </>
  )
}

export default MultiStepForm;