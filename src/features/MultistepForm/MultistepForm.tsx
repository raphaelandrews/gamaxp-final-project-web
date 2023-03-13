import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';

import * as C from "./MultiStepForm.styles";
import { Button, FormWrapper, InputWrapper, Label, Section, Title } from "@/components";

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



export const MultiStepForm = () => {
    const [step, setStep] = useState(1);

    const handleNextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handlePrevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = (values: FormData) => {
        console.log(values)
    };

    const [isAddressColor, setIsAddressColor] = useState(["var(--first-color)", "var(--bg-color)"]);
    const [isShippingColor, setIsShippingColor] = useState(["transparent", "var(--first-color)"]);
    const [isPaymentColor, setIsPaymentColor] = useState(["transparent", "var(--first-color)"]);

    const handleAddressStep = (step: number) => {
        if (step == 1) {
            setStep(1)
            setIsAddressColor(["var(--first-color)", "var(--bg-color)"])
            setIsShippingColor(["transparent", "var(--first-color)"])
            setIsPaymentColor(["transparent", "var(--first-color)"])
        } else if (step == 2) {
            setStep(2)
            setIsAddressColor(["transparent", "var(--first-color)"])
            setIsShippingColor(["var(--first-color)", "var(--bg-color)"])
            setIsPaymentColor(["transparent", "var(--first-color)"])
        } else {
            setStep(3)
            setIsAddressColor(["transparent", "var(--first-color)"])
            setIsShippingColor(["transparent", "var(--first-color)"])
            setIsPaymentColor(["var(--first-color)", "var(--bg-color)"])
        }
    };

    useEffect(() => {
        handleAddressStep(step);
    }, [step]);

    return (
        <Section widthMD='50%'> 
            <>
                <C.ButtonWrapper>
                    <Button
                        action={() => handleAddressStep(1)}
                        text="Adress"
                        size='var(--fs-6)'
                        color={isAddressColor[1]}
                        colorHover='var(--bg-color)'
                        padding=".75rem 1.25rem"
                        border="2px solid var(--first-color)"
                        borderRadius='.5rem'
                        backgroundColor={isAddressColor[0]}
                        hoverBg="var(--second-color)"
                    />
                    <Button
                        action={() => handleAddressStep(2)}
                        text="Shipping"
                        size='var(--fs-6)'
                        color={isShippingColor[1]}
                        colorHover='var(--bg-color)'
                        padding=".75rem 1.25rem"
                        border="2px solid var(--first-color)"
                        borderRadius='.5rem'
                        backgroundColor={isShippingColor[0]}
                        hoverBg="var(--second-color)"
                    />
                    <Button
                        action={() => handleAddressStep(3)}
                        text="Payment"
                        size='var(--fs-6)'
                        color={isPaymentColor[1]}
                        colorHover='var(--bg-color)'
                        padding=".75rem 1.25rem"
                        border="2px solid var(--first-color)"
                        borderRadius='.5rem'
                        backgroundColor={isPaymentColor[0]}
                        hoverBg="var(--second-color)"
                    />
                </C.ButtonWrapper>

                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {({ values }) => (
                        <C.Wrapper>
                            <Form>
                                <FormWrapper>
                                    {step === 1 && (
                                        <>
                                            <InputWrapper>
                                                <Label text="Street" htmlFor="address.street" fontSize="var(--fs-5)" fontSizeMD="var(--fs-7);" />
                                                <Field id="address.street" name="address.street" placeholder="Street" />
                                            </InputWrapper>
                                            <InputWrapper>
                                                <Label text="City" htmlFor="address.city" fontSize="var(--fs-5)" fontSizeMD="var(--fs-7);" />
                                                <Field id="address.city" name="address.city" placeholder="City" />
                                            </InputWrapper>
                                            <InputWrapper>
                                                <Label text="State" htmlFor="address.state" fontSize="var(--fs-5)" fontSizeMD="var(--fs-7);" />
                                                <Field id="address.state" name="address.state" placeholder="State" />
                                            </InputWrapper>
                                            <InputWrapper>
                                                <Label text="Zipcode" htmlFor="address.zipcode" fontSize="var(--fs-5)" fontSizeMD="var(--fs-7);" />
                                                <Field id="address.zipcode" name="address.zipcode" placeholder="Zipcode" />
                                            </InputWrapper>
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
                                            <InputWrapper>
                                                <Label text="Card Number" htmlFor="payment.cardNumber" fontSize="var(--fs-5)" fontSizeMD="var(--fs-7);" />
                                                <Field id="payment.cardNumber" name="payment.cardNumber" placeholder="Card Number" />
                                            </InputWrapper>
                                            <InputWrapper>
                                                <Label text="Card Holder Number" htmlFor="payment.cardholderName" fontSize="var(--fs-5)" fontSizeMD="var(--fs-7);" />
                                                <Field id="payment.cardholderName" name="payment.cardholderName" placeholder="Cardholder Name" />
                                            </InputWrapper>
                                            <InputWrapper>
                                                <Label text="Expiration Date" htmlFor="payment.expirationDate" fontSize="var(--fs-5)" fontSizeMD="var(--fs-7);" />
                                                <Field id="payment.expirationDate" name="payment.expirationDate" placeholder="Expiration Date" />
                                            </InputWrapper>
                                            <InputWrapper>
                                                <Label text="CVV" htmlFor="payment.cvv" fontSize="var(--fs-5)" fontSizeMD="var(--fs-7);" />
                                                <Field id="payment.cvv" name="payment.cvv" placeholder="CVV" />
                                            </InputWrapper>
                                        </>
                                    )}

                                    {step == 1 && (
                                        <Button
                                            type="button"
                                            action={handleNextStep}
                                            text="Continue to Shipping"
                                            size='var(--fs-5)'
                                            color='var(--bg-color)'
                                            weight="700"
                                            textTransform="uppercase"
                                            height="3rem"
                                            margin="1rem 0 0"
                                            border='none'
                                            borderRadius=".5rem"
                                            backgroundColor="var(--second-color)"
                                            hoverBg="var(--second-color-alt)"
                                        />
                                    )}

                                    {step == 2 && (
                                        <>
                                            <Button
                                                type="button"
                                                action={handlePrevStep}
                                                text="Back to Address"
                                                size='var(--fs-5)'
                                                color='var(--bg-color)'
                                                weight="700"
                                                textTransform="uppercase"
                                                height="3rem"
                                                margin="1rem 0 0"
                                                border='none'
                                                borderRadius=".5rem"
                                                backgroundColor="var(--second-color)"
                                                hoverBg="var(--second-color-alt)"
                                            />

                                            <Button
                                                type="button"
                                                action={handleNextStep}
                                                text="Continue to Payment"
                                                size='var(--fs-5)'
                                                color='var(--bg-color)'
                                                weight="700"
                                                textTransform="uppercase"
                                                height="3rem"
                                                border='none'
                                                borderRadius=".5rem"
                                                backgroundColor="var(--second-color)"
                                                hoverBg="var(--second-color-alt)"
                                            />
                                        </>
                                    )}


                                    {step == 3 && (
                                        <>
                                            <Button
                                                type="button"
                                                action={handlePrevStep}
                                                text="Back to Shipping"
                                                size='var(--fs-5)'
                                                color='var(--bg-color)'
                                                weight="700"
                                                textTransform="uppercase"
                                                height="3rem"
                                                margin="1rem 0 0"
                                                border='none'
                                                borderRadius=".5rem"
                                                backgroundColor="var(--second-color)"
                                                hoverBg="var(--second-color-alt)"
                                            />

                                            <Button
                                                type="submit"
                                                text="Submit"
                                                size='var(--fs-5)'
                                                color='var(--bg-color)'
                                                weight="700"
                                                textTransform="uppercase"
                                                height="3rem"
                                                border='none'
                                                borderRadius=".5rem"
                                                backgroundColor="var(--second-color)"
                                                hoverBg="var(--second-color-alt)"
                                            />
                                        </>
                                    )}
                                </FormWrapper>
                            </Form>
                        </C.Wrapper>
                    )}
                </Formik>
            </>
        </Section>
    )
}