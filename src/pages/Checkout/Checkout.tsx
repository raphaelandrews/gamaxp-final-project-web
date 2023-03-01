import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import AddressForm from '../../components/AdressFrom/AdressFrom';
import ShippingForm from '../../components/Shipping/Shipping';
import PaymentForm from '../../components/Payment/Payment';

interface FormData {
  address: {
    street: string;
    city: string;
    state: string;
    zipcode: string;
  };
  shipping: {
    shippingMethod: string;
    deliveryDate: string;
  };
  payment: {
    cardNumber: string;
    cardholderName: string;
    expirationDate: string;
    cvv: string;
  };
}

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

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

  const handleSubmit = (values: FormData) => {
    console.log('Form Values', values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validateOnMount
      >
        {(formikProps) => (
          <Form>
            {step === 1 && <AddressForm {...formikProps} />}
            {step === 2 && <ShippingForm {...formikProps} />}
            {step === 3 && <PaymentForm {...formikProps} />}

            <div>
              {step > 1 && (
                <button type="button" onClick={() => setStep(step - 1)}>
                  Previous
                </button>
              )}

              {step < 3 ? (
                <button type="button" onClick={() => setStep(step + 1)}>
                  Next
                </button>
              ) : (
                <button type="submit">Submit</button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MultiStepForm;