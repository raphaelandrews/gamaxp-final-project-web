import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import * as C from "./DeleteProductForm.styles";
import { Button, Form, InputWrapper, Label } from "@/components";


export const DeleteProductForm: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [data, setData] = useState({ product_name: "", price: "", category_id: "", description: "" });

    async function getData() {
        const res = await axios.get(`${import.meta.env.VITE_API_HOST}/produto/${id}`);
        setData(res.data);
    }

    useEffect(() => {
        getData();
    }, []);

    const handleSubmit = async () => {
        let confirmDelete = confirm('Are you sure???')
        if (confirmDelete === false) {
            return
        } else {
            try {
                await axios.delete(`${import.meta.env.VITE_API_HOST}/produto/${id}`);
                alert("Product Deleted");
                navigate("/dashboard");
            } catch (error) {
                alert("Ops, something went wrong, please try again!")
            }
        }

    };


    return (
        <C.Wrapper>
            <Form>
                <C.FormInputs>
                    <InputWrapper>
                        <Label text="Product" htmlFor="product_name" />
                        <input type="text" name="product_name" placeholder={data.product_name} disabled />
                    </InputWrapper>

                    <InputWrapper>
                        <Label text="Price" htmlFor="price" />
                        <input type="number" name="price" placeholder={data.price} disabled />
                    </InputWrapper>

                    <InputWrapper>
                        <Label text="Category" htmlFor="category" />
                        <input type="text" name="category" placeholder={data.category_id} disabled />
                    </InputWrapper>

                    <InputWrapper>
                        <Label text="Description" htmlFor="description" />
                        <input type="text" name="description" placeholder={data.description} disabled />
                    </InputWrapper>

                    <Button
                        action={handleSubmit}
                        text="Delete"
                        weight="700"
                        textTransform="uppercase"
                        height="3rem"
                        margin="1rem 0 0"
                        border="none"
                        borderRadius=".5rem"
                        backgroundColor="var(--third-color)"
                        hoverBg="var(--third-color-alt)"
                    />
                </C.FormInputs>
            </Form>
        </C.Wrapper>
    )
}
