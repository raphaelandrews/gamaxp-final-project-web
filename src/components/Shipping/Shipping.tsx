import React from 'react';
import { FormikProps } from 'formik';

interface ShippingFormProps extends FormikProps<FormData> {}

const ShippingForm = (props: ShippingFormProps) => {
  const { values, handleChange } = props;

  return (
    <>
      <label htmlFor="shipping.shippingMethod">Shipping Method:</label>
      <input
        id="shipping.shippingMethod"
        name="shipping.shippingMethod"
        value={values.shipping.shippingMethod}
        onChange={handleChange}
      />

      <label htmlFor="shipping.deliveryDate">Delivery Date:</label>
      <input
        id="shipping.deliveryDate"
        name="shipping.deliveryDate"
        value={values.shipping.deliveryDate}
        onChange={handleChange}
      />
    </>
  );
};

export default ShippingForm;