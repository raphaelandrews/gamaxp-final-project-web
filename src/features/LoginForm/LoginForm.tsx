import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useAuth } from "@/context";
import { Button, FormWrapper, InputWrapper, Label, Title } from "@/components";

import * as C from "./LoginForm.styles";

interface LoginFormValues {
    email: string;
    password: string;
}

const initialValues: LoginFormValues = {
    email: "",
    password: "",
};

const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
});


export const LoginForm: React.FC = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const onSubmit = async (values: LoginFormValues) => {
        try {
            await auth.authenticate(values.email, values.password)

            navigate("/profile");
        } catch (error) {
            if (error) {
                return alert("Login inválido")
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
                    <Title text="Welcome back" fontSize="var(--fs-10)" fontSizeMD="var(--fs-12)" margin="0 0 1em" />
                    <Form>
                        <FormWrapper>
                            <InputWrapper>
                                <Label text="Email" htmlFor="email" fontSize="var(--fs-5)" fontSizeMD="var(--fs-7);" />
                                <Field type="email" name="email" placeholder="Email" />
                            </InputWrapper>
                            <ErrorMessage name="email">{msg => <C.Message>{msg}</C.Message>}</ErrorMessage>

                            <InputWrapper>
                                <Label text="Passoword" htmlFor="password" fontSize="var(--fs-5)" fontSizeMD="var(--fs-7)" />
                                <Field type="password" name="password" placeholder="Login" />
                            </InputWrapper>
                            <ErrorMessage name="password">{msg => <C.Message>{msg}</C.Message>}</ErrorMessage>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                text="Login"
                                color="var(--bg-color)"
                                weight="700"
                                textTransform="uppercase"
                                height="3rem"
                                margin="1rem 0 0"
                                border="none"
                                borderRadius=".5rem"
                                backgroundColor="var(--second-color)"
                                hoverBg="var(--second-color-alt)"
                            />
                            <Link to="/signup">Or create an <span>account</span></Link>
                        </FormWrapper>
                    </Form>
                </C.Wrapper>
            )}
        </Formik>
    );
};