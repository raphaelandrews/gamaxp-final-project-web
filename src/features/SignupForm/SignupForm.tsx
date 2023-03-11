import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useAuth } from "@/context";
import { Button, FormWrapper, InputWrapper, Label, Title } from "@/components";

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
                    <Title text="Create your account" fontSize="2rem" fontSizeMD="2.5rem" margin="0 0 1em" />
                    <Form>
                        <FormWrapper>
                            <InputWrapper>
                                <Label text="Username" htmlFor="username" />
                                <Field type="text" name="username" placeholder="Username" />
                            </InputWrapper>
                            <ErrorMessage name="username">{msg => <C.Message>{msg}</C.Message>}</ErrorMessage>

                            <InputWrapper>
                                <Label text="Email" htmlFor="email" />
                                <Field type="email" name="email" placeholder="Email" />
                            </InputWrapper>
                            <ErrorMessage name="email">{msg => <C.Message>{msg}</C.Message>}</ErrorMessage>

                            <InputWrapper>
                                <Label text="Passoword" htmlFor="password" />
                                <Field type="password" name="password" placeholder="Password" />
                            </InputWrapper>
                            <ErrorMessage name="password">{msg => <C.Message>{msg}</C.Message>}</ErrorMessage>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                text="Register"
                                weight="700"
                                textTransform="uppercase"
                                height="3rem"
                                margin="1rem 0 0"
                                border="none"
                                borderRadius=".5rem"
                                backgroundColor="var(--second-color)"
                                hoverBg="var(--second-color-alt)"
                            />
                            <Link to="/login">
                                Already have an account? <span>Login</span></Link>
                        </FormWrapper>
                    </Form>
                </C.Wrapper>
            )}
        </Formik>
    );
};
