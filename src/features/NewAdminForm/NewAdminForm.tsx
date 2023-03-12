import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import * as C from "./NewAdminForm.styles";
import { Button } from "@/components";
import { AdminUserIcon, EmailIcon, PasswordIcon, UserIcon } from "@/assets/svg";

interface AdminFormValues {
  username: string;
  email: string;
  password: string;
  type: string;
}

const initialValues: AdminFormValues = {
  username: "",
  email: "",
  password: "",
  type: "Admin",
};

const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});


export const NewAdminForm: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values: AdminFormValues) => {
    const formData = new FormData();
    formData.append("user_name", values.username);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("type", values.type);
    console.log(values.username, values.email, values.password, values.type)

    try {
      await axios.post(`${import.meta.env.VITE_API_HOST}/usuario`, formData, {
        headers: { "Content-Type": "application/json", },
      });

      navigate("/dashboard");
    } catch (error) {

      if (error) {
        return alert("Ops, something wrong. Try again.")
      }
    }
  };


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <C.Wrapper>
          <Form>
            <C.FormInputs>
              <C.InputWrapper>
                <UserIcon
                  width="1rem"
                  height="1rem"
                  color="var(--bg-color)"
                  position="absolute"
                  top="50%"
                  left="1rem"
                  fontSize="var(--fs-4)"
                  transform="translateY(-50%)"
                />
                <Field type="text" name="username" placeholder="Username" />
              </C.InputWrapper>
              <ErrorMessage name="username">{msg => <C.Message>{msg}</C.Message>}</ErrorMessage>

              <C.InputWrapper>
                <EmailIcon
                  width="1rem"
                  height="1rem"
                  color="var(--bg-color)"
                  position="absolute"
                  top="50%"
                  left="1rem"
                  fontSize="var(--fs-4)"
                  transform="translateY(-50%)"
                />
                <Field type="email" name="email" placeholder="Email" />
              </C.InputWrapper>
              <ErrorMessage name="email">{msg => <C.Message>{msg}</C.Message>}</ErrorMessage>

              <C.InputWrapper>
                <PasswordIcon
                  width="1rem"
                  height="1rem"
                  color="var(--bg-color)"
                  position="absolute"
                  top="50%"
                  left="1rem"
                  fontSize="var(--fs-4)"
                  transform="translateY(-50%)"
                />
                <Field type="password" name="password" placeholder="Senha" />
              </C.InputWrapper>
              <ErrorMessage name="password">{msg => <C.Message>{msg}</C.Message>}</ErrorMessage>

              <C.InputWrapper>
                <AdminUserIcon
                  width="1rem"
                  height="1rem"
                  color="var(--bg-color)"
                  position="absolute"
                  top="50%"
                  left="1rem"
                  fontSize="var(--fs-4)"
                  transform="translateY(-50%)"
                />                <Field type="text" name="type" placeholder="Admin" disabled={true} />
              </C.InputWrapper>
              <ErrorMessage name="description">{msg => <C.Message>{msg}</C.Message>}</ErrorMessage>

              <Button
                type="submit"
                disabled={isSubmitting}
                text="Sent"
                weight="700"
                textTransform="uppercase"
                height="3rem"
                margin="1rem 0 0"
                borderRadius=".25rem"
                backgroundColor="var(--second-color)"
                hoverBg="var(--second-color-alt)"
              />
            </C.FormInputs>
          </Form>
        </C.Wrapper>
      )}
    </Formik>
  );
};
