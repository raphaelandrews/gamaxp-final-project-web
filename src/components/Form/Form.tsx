import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/useAuth";


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


const Login: React.FC = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const onSubmit = async (values: LoginFormValues) => {
        try {
            await auth.authenticate(values.email, values.password)
            navigate("/profile");
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Login
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default Login;
