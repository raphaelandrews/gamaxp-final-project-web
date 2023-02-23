import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/useAuth";

interface Values {
    email: string;
    password: string;
}

const LoginForm = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    return (
        <div>
            <h1>Signup</h1>
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                onSubmit={(
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                ) => {
                    setTimeout(async () => {
                        try {
                        await auth.authenticate(values.email, values.password)
                        navigate("/profile");
                        } catch (error) {
                            alert(error)
                        }
                    }, 500);
                }}
            >
                <Form>
                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="john@acme.com"
                        type="email"
                    />

                    <label htmlFor="password">Password</label>
                    <Field id="password" name="password" placeholder="Password" type="password" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

export default LoginForm;
