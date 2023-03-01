import React from 'react';
import { FormikProps } from 'formik';

interface PaymentFormProps extends FormikProps<FormData> {}

const PaymentForm = (props: PaymentFormProps) => {
  const { values, handleChange } = props;

  return (
    <>
      <label htmlFor="payment.cardNumber">Card Number:</label>
      <input
        id="payment.cardNumber"
        name="payment.cardNumber"
        value={values.payment.cardNumber}
        onChange={handleChange}
      />

      <label htmlFor="payment.cardholderName">Cardholder Name:</label>
      <input
        id="payment.cardholderName"
        name="payment.cardholderName"
        value={values.payment.cardholderName}
        onChange={handleChange}
      />

      <label htmlFor="payment.expirationDate">Expiration Date:</label>
      <input
        id="payment.expirationDate"
        name="payment.expirationDate"
        value={values.payment.expirationDate}
        onChange={handleChange}
      />

      <label htmlFor="payment.cvv">CVV:</label>
      <input
        id="payment.cvv"
        name="payment.cvv"
        value={values.payment.cvv}
        onChange={handleChange}
      />
    </>
  );
};

export default PaymentForm;