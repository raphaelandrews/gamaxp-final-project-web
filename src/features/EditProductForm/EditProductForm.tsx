import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import * as C from "./EditProductForm.styles";
import { Button, FormWrapper, InputWrapper, Label, Title } from "@/components";

interface ProductFormValues {
    name: string;
    price: string;
    image: string;
    category: string;
    description: string;
}

const initialValues: ProductFormValues = {
    name: "",
    price: "",
    image: "",
    category: "",
    description: "",
};

const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    price: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    image: Yup.mixed().required("Required"),
});

export const EditProductForm: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();


    const [data, setData] = useState({ product_name: "", price: "", category_id: "", description: "", photo: "" });

    async function getData() {
        const res = await axios.get(`${import.meta.env.VITE_API_HOST}/produto/${id}`);
        setData(res.data);
        //setPreviewUrl(`${import.meta.env.VITE_API_HOST}/src/assets/img/${data.photo}`)
    }

    useEffect(() => {
        getData();
    }, []);

    const [previewUrl, setPreviewUrl] = useState("");

    const handleSubmit = async (values: ProductFormValues) => {
        const formData = new FormData();
        formData.append("product_name", values.name);
        formData.append("price", values.price);
        formData.append("category_id", values.category);
        formData.append("description", values.description);
        formData.append("photo", values.image as string);
        if (values.image) {
            const reader = new FileReader();
            //reader.readAsDataURL(values.image)

            reader.onloadend = () => {
                const imageString = reader.result as string;
            };
        }

        try {
            await axios.put(`${import.meta.env.VITE_API_HOST}/produto`, formData, {
                headers: { "Content-Type": "multipart/form-data", },
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
            {({ values, isSubmitting, setFieldValue }) => (
                <C.Wrapper>
                    <Form>
                        <FormWrapper>
                            <InputWrapper>
                                <Label text="Name" htmlFor="name" fontSize="var(--fs-5)" fontSizeMD="var(--fs-7)" />
                                <Field type="text" name="name" placeholder={data.product_name} />
                            </InputWrapper>
                            <ErrorMessage name="name">{msg => <C.Message>{msg}</C.Message>}</ErrorMessage>

                            <InputWrapper>
                                <Label text="Price" htmlFor="price" fontSize="var(--fs-5)" fontSizeMD="var(--fs-7)" />
                                <Field type="number" name="price" placeholder={data.price} />
                            </InputWrapper>
                            <ErrorMessage name="price">{msg => <C.Message>{msg}</C.Message>}</ErrorMessage>

                            <InputWrapper>
                                <Label text="Category" htmlFor="category" fontSize="var(--fs-5)" fontSizeMD="var(--fs-7)" />
                                <Field type="text" name="category" placeholder={data.category_id} />
                            </InputWrapper>
                            <ErrorMessage name="category">{msg => <C.Message>{msg}</C.Message>}</ErrorMessage>

                            <InputWrapper>
                                <Label text="Description" htmlFor="description" fontSize="var(--fs-5)" fontSizeMD="var(--fs-7)" />
                                <Field type="text" name="description" placeholder={data.description} />
                            </InputWrapper>
                            <ErrorMessage name="description">{msg => <C.Message>{msg}</C.Message>}</ErrorMessage>

                            <C.InputFile>
                                <input
                                    type="file" name="image" placeholder="Image"
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        const file = event.currentTarget.files?.[0];
                                        setFieldValue("image", event.currentTarget.files?.[0] || null);

                                        if (file) {
                                            const fileReader = new FileReader();
                                            fileReader.onload = () => {
                                                setPreviewUrl(fileReader.result as string);
                                            };
                                            fileReader.readAsDataURL(file);
                                        }
                                    }}
                                />
                            </C.InputFile>
                            <ErrorMessage name="img">{msg => <C.Message>{msg}</C.Message>}</ErrorMessage>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                text="Sent"
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
                        </FormWrapper>
                    </Form>
                    {previewUrl &&
                        <C.ImagePreview src={previewUrl} alt="Preview" />
                    }
                </C.Wrapper>
            )}
        </Formik>
    );
};