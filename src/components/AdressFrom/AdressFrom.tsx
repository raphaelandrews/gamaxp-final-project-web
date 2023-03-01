import React from 'react';
import { FormikProps } from 'formik';

interface AddressFormProps extends FormikProps<FormData> {}

const AddressForm = (props: AddressFormProps) => {
  const { values, handleChange } = props;

  return (
    <>
      <label htmlFor="address.street">Street:</label>
      <input
        id="address.street"
        name="address.street"
        value={values.address.street}
        onChange={handleChange}
      />

      <label htmlFor="address.city">City:</label>
      <input
        id="address.city"
        name="address.city"
        value={values.address.city}
        onChange={handleChange}
      />

      <label htmlFor="address.state">State:</label>
      <input
        id="address.state"
        name="address.state"
        value={values.address.state}
        onChange={handleChange}
      />

      <label htmlFor="address.zipcode">Zipcode:</label>
      <input
        id="address.zipcode"
        name="address.zipcode"
        value={values.address.zipcode}
        onChange={handleChange}
      />
    </>
  );
};

export default AddressForm;