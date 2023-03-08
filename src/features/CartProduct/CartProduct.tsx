import { useCart } from "@/context";

import * as C from "./CartProduct.styles";
import { Button } from "@/components";

import { useEffect, useState } from "react";
import axios from "axios";

type CartProductProps = {
  id: number;
  product_name?: string;
  description?: string;
  price?: number;
  photo?: string;
  category_id?: number;
  category?: any;
  quantity: number
  flexDirection?: string;
  alignItems?: string;
  gap?: string;
}

export function CartProduct(props: CartProductProps) {
  const { removeFromCart } = useCart()

  const [data, setData] = useState<CartProductProps | null>(null);

  async function getData() {
    const res = await axios.get<CartProductProps>(`${import.meta.env.VITE_API_HOST}/produto/${props.id}`);
    setData(res.data);
  }

  useEffect(() => {
    getData();
  }, [props.id]);

  if (!data) {
    return <div>Cart is empty!</div>;
  }

  const productImg = `src/assets/img/${data.photo}`

  return (
    <C.CartProductWrapper flexDirection={props.flexDirection} alignItems="flex-start" gap="1rem">
      <C.ProductContent>
        <C.CartProductImg
          src={productImg}
        />
        <C.ProductInfo>
          <C.ProductName>
            {data.product_name}
          </C.ProductName>
          <C.ProductQuantity>
            {props.quantity >= 1 && (
              <span>
                x{props.quantity}
              </span>
            )}
            <C.ProductPrice>
              ${data.price}
            </C.ProductPrice>
          </C.ProductQuantity>
        </C.ProductInfo>
      </C.ProductContent>
      <C.ProductTotal alignItems="flex-start">
        <Button
          action={() => removeFromCart(data.id)}
          display="flex"
          size=".75rem"
          padding=".5rem 1rem"
          backgroundColor="var(--third-color)"
          hoverBg="var(--third-color-alt)"
          text="Remover"
        />
      </C.ProductTotal>
    </C.CartProductWrapper >
  )
}
