import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as C from "./styles";

interface AddressFormValues {
    street: string;
    city: string;
    state: string;
    zipcode: string;
}

interface ShippingFormValues {
    shippingMethod: string;
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
        shippingMethod: 'standard',
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
        <>
            <C.CheckoutSteps>
                <C.Step onClick={() => handleAddressStep(1)} color={isAddressColor}>Address</C.Step>
                <C.Step onClick={() => handleAddressStep(2)} color={isShippingColor}>Shipping</C.Step>
                <C.Step onClick={() => handleAddressStep(3)} color={isPaymentColor}>Payment</C.Step>
            </C.CheckoutSteps>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ values }) => (
                    <C.Wrapper>
                        <Form>
                            <C.FormInputs>
                                {step === 1 && (
                                    <>
                                        <C.InputWrapper>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                                            <Field id="address.street" name="address.street" placeholder="Street" />
                                        </C.InputWrapper>
                                        <C.InputWrapper>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                                            <Field id="address.city" name="address.city" placeholder="City" />
                                        </C.InputWrapper>
                                        <C.InputWrapper>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                                            <Field id="address.state" name="address.state" placeholder="State" />
                                        </C.InputWrapper>
                                        <C.InputWrapper>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                                            <Field id="address.zipcode" name="address.zipcode" placeholder="Zipcode" />
                                        </C.InputWrapper>
                                    </>
                                )}

                                {step === 2 && (
                                    <>
                                        <C.InputWrapperRadio>
                                            <Field type="radio" id="shipping.shippingMethod" name='shipping.shippingMethod' placeholder="Shipping Method" value="standard" checked />
                                            <div>
                                                <strong>Standard</strong>
                                                <p>10 - 15 Business Days</p>
                                            </div>
                                        </C.InputWrapperRadio>
                                        <C.InputWrapperRadio>
                                            <Field type="radio" id="shipping.shippingMethod" name='shipping.shippingMethod' placeholder="Shipping Method" value="express" />
                                            <div>
                                                <strong>Standard</strong>
                                                <p>4 - 7 Business Days</p>
                                            </div>
                                        </C.InputWrapperRadio>
                                    </>
                                )}

                                {step === 3 && (
                                    <>
                                        <C.InputWrapper>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                                            <Field id="payment.cardNumber" name="payment.cardNumber" placeholder="Card Number" />
                                        </C.InputWrapper>
                                        <C.InputWrapper>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                                            <Field id="payment.cardholderName" name="payment.cardholderName" placeholder="Cardholder Name" />
                                        </C.InputWrapper>
                                        <C.InputWrapper>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                                            <Field id="payment.expirationDate" name="payment.expirationDate" placeholder="Expiration Date" />
                                        </C.InputWrapper>
                                        <C.InputWrapper>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                                            <Field id="payment.cvv" name="payment.cvv" placeholder="CVV" />
                                        </C.InputWrapper>
                                    </>
                                )}

                                {step == 1 && (
                                    <C.Button type="button" onClick={handleNextStep}>
                                        Continue to Shipping
                                    </C.Button>
                                )}

                                {step == 2 && (
                                    <>
                                        <C.Button type="button" onClick={handlePrevStep}>
                                            Back to Address
                                        </C.Button>
                                        <C.Button type="button" onClick={handleNextStep}>
                                            Continue to Payment
                                        </C.Button>
                                    </>
                                )}


                                {step == 3 && (
                                    <>
                                        <C.Button type="button" onClick={handlePrevStep}>
                                            Back to Shipping
                                        </C.Button>
                                        <C.Button type="submit">Submit</C.Button>
                                    </>
                                )}
                            </C.FormInputs>
                        </Form>
                    </C.Wrapper>
                )}
            </Formik>
        </>
    )
}

export default MultiStepForm;