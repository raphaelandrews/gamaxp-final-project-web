import { useState } from "react";
import { ProductsTable, UsersTable, OrdersTable } from "@/features";

import { G } from "@/styles";
import * as C from "./Dashboard.styles";
import { Button } from "@/components";

export const Dashboard = () => {
    const [isDashboard, setIsDashboard] = useState(<ProductsTable />);
    const [isProducts, setIsProducts] = useState("var(--second-color)");
    const [isUsers, setIsUsers] = useState("transparent");
    const [isOrders, setIsOrders] = useState("transparent");

    const handleDashboard = (dashboard: string) => {
        if (dashboard === "products") {
            setIsDashboard(<ProductsTable />)
            setIsProducts("var(--second-color)")
            setIsUsers("transparent")
            setIsOrders("transparent")
        } else if (dashboard === "users") {
            setIsDashboard(<UsersTable />)
            setIsProducts("transparent")
            setIsUsers("var(--second-color)")
            setIsOrders("transparent")
        } else {
            setIsDashboard(<OrdersTable />)
            setIsProducts("transparent")
            setIsUsers("transparent")
            setIsOrders("var(--second-color)")
        }
    };

    return (
        <G.Container>
            <C.Title>Admin Dashboard</C.Title>

            <C.ButtonWrapper>
                <Button
                    action={() => handleDashboard("products")}
                    text="Products"
                    padding=".75rem 1.25rem"
                    border="2px solid var(--bg-alt-color)"
                    backgroundColor={isProducts}
                    hoverBg="var(--second-color)"
                />
                <Button
                    action={() => handleDashboard("users")}
                    text="Users"
                    padding=".75rem 1.25rem"
                    border="2px solid var(--bg-alt-color)"
                    backgroundColor={isUsers}
                    hoverBg="var(--second-color)"
                />
                <Button
                    action={() => handleDashboard("orders")}
                    text="Orders"
                    padding=".75rem 1.25rem"
                    border="2px solid var(--bg-alt-color)"
                    backgroundColor={isOrders}
                    hoverBg="var(--second-color)"
                />
            </C.ButtonWrapper>

            {isDashboard}
        </G.Container>
    )
}
