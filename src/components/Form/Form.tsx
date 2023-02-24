import { useState } from "react";
import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/useAuth";

import { Title, Wrapper, Form, FormInputs, InputWrapper, Input, Button } from "./styles";


interface FormValues {
    email: string;
    password: string;
}

interface MyFormProps {
    initialEmail?: string;
    initialPassword?: string;
}

const InnerForm = (props: FormikProps<FormValues>) => {
    const auth = useAuth();
    const navigate = useNavigate();

    const {
        values,
        errors,
        touched,
        handleBlur,
        isSubmitting,
    } = props;

    async function onFinish(values: { email: string, password: string }) {
        try {
            await auth.authenticate(values.email, values.password)
            navigate("/profile");
        } catch (error) {
            console.log(error)
        }
    }

    const [formValues, setFormValues] = useState<FormValues>({
        email: "",
        password: ""
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onFinish(formValues)
    };

    return (
        <Wrapper>
            <Title>Welcome back</Title>
            <Form onSubmit={handleSubmit}>
                <FormInputs>
                    <InputWrapper>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                        <Input
                            width={50}
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            value={formValues.email}
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path></svg>
                        <Input
                            width={50}
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            value={formValues.password}
                        />
                    </InputWrapper>
                </FormInputs>

                <Button
                    type="submit"
                /* disabled={
                     isSubmitting ||
                     !!(errors.email && touched.email) ||
                     !!(errors.password && touched.password)
                 }*/
                >
                    Sign In
                </Button>
            </Form>
        </Wrapper>
    );
};


const LoginForm = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: props => ({
        email: props.initialEmail || "",
        password: props.initialPassword || ""
    }),

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
        password: Yup.string().required("Password is required")
    }),

    handleSubmit(
        { email, password }: FormValues,
        { props, setSubmitting, setErrors }
    ) {
        console.log(email, password);
    }
})(InnerForm);

export default LoginForm;

