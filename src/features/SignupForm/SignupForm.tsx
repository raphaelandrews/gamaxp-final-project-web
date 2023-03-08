import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useAuth } from "@/context";
import { Button } from "@/components";

import * as C from "./SignupForm.styles";

interface LoginFormValues {
    username: string;
    email: string;
    password: string;
}

const initialValues: LoginFormValues = {
    username: "",
    email: "",
    password: "",
};

const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
});


export const SignupForm: React.FC = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const onSubmit = async (values: LoginFormValues) => {
        try {
            await auth.register(values.username, values.email, values.password)
         
            navigate("/profile");
        } catch (error) {
            if (error = 400) {
                return alert("Ops, dados inválidos, tente novamente")
            } else {
                return alert("Ops, ocorreu um erro, tente novamente")
            }
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                <C.Wrapper>
                    <C.Title>Create your account
                    </C.Title>
                    <Form>
                        <C.FormInputs>
                            <C.InputWrapper>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                                <Field type="username" name="username" placeholder="Username" />
                            </C.InputWrapper>
                            <ErrorMessage name="username">{msg => <C.Message>{msg}</C.Message>}</ErrorMessage>

                            <C.InputWrapper>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                                <Field type="email" name="email" placeholder="Email" />
                            </C.InputWrapper>
                            <ErrorMessage name="email">{msg => <C.Message>{msg}</C.Message>}</ErrorMessage>

                            <C.InputWrapper>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path></svg>
                                <Field type="password" name="password" placeholder="Login" />
                            </C.InputWrapper>
                            <ErrorMessage name="password">{msg => <C.Message>{msg}</C.Message>}</ErrorMessage>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                text="Register"
                                weight="700"
                                textTransform="uppercase"
                                height="3rem"
                                marginTop="1rem"
                                borderRadius=".25rem"
                                backgroundColor="var(--second-color)"
                                hoverBg="var(--second-color-alt)"
                            />
                            <Link to="/login">
                                Already have an account? <span>Login</span></Link>
                        </C.FormInputs>
                    </Form>
                </C.Wrapper>
            )}
        </Formik>
    );
};
