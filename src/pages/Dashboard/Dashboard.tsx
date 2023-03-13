import { useState } from "react";
import { ProductsTable, UsersTable, OrdersTable } from "@/features";

import * as C from "./Dashboard.styles";
import { Container, Button, Title } from "@/components";

export const Dashboard = () => {
    const [isDashboard, setIsDashboard] = useState(<ProductsTable />);
    const [isProducts, setIsProducts] = useState(["var(--first-color)", "var(--bg-color)"]);
    const [isUsers, setIsUsers] = useState(["transparent", "var(--first-color)"]);
    const [isOrders, setIsOrders] = useState(["transparent","var(--first-color)"]);

    const handleDashboard = (dashboard: string) => {
        if (dashboard === "products") {
            setIsDashboard(<ProductsTable />)
            setIsProducts(["var(--first-color)", "var(--bg-color)"])
            setIsUsers(["transparent", "var(--first-color)"])
            setIsOrders(["transparent", "var(--first-color)"])
        } else if (dashboard === "users") {
            setIsDashboard(<UsersTable />)
            setIsProducts(["transparent", "var(--first-color)"])
            setIsUsers(["var(--first-color)", "var(--bg-color)"])
            setIsOrders(["transparent", "var(--first-color)"])
        } else {
            setIsDashboard(<OrdersTable />)
            setIsProducts(["transparent", "var(--first-color)"])
            setIsUsers(["transparent", "var(--first-color)"])
            setIsOrders(["var(--first-color)", "var(--bg-color)"])
        }
    };

    return (
        <Container>
            <>
                <Title text="Admin Dashboard" margin="2rem 0 0" />

                <C.ButtonWrapper>
                    <Button
                        action={() => handleDashboard("products")}
                        text="Products"
                        size='var(--fs-6)'
                        color={isProducts[1]}
                        colorHover='var(--bg-color)'
                        padding=".75rem 1.25rem"
                        border="2px solid var(--first-color)"
                        borderRadius=".5rem"
                        backgroundColor={isProducts[0]}
                        hoverBg="var(--second-color)"
                    />
                    <Button
                        action={() => handleDashboard("users")}
                        text="Users"
                        size='var(--fs-6)'
                        color={isUsers[1]}
                        colorHover='var(--bg-color)'
                        padding=".75rem 1.25rem"
                        border="2px solid var(--first-color)"
                        borderRadius=".5rem"
                        backgroundColor={isUsers[0]}
                        hoverBg="var(--second-color)"
                    />
                    <Button
                        action={() => handleDashboard("orders")}
                        text="Orders"
                        size='var(--fs-6)'
                        color={isOrders[1]}
                        colorHover='var(--bg-color)'
                        padding=".75rem 1.25rem"
                        border="2px solid var(--first-color)"
                        borderRadius=".5rem"
                        backgroundColor={isOrders[0]}
                        hoverBg="var(--second-color)"
                    />
                </C.ButtonWrapper>

                {isDashboard}
            </>
        </Container>
    )
}
