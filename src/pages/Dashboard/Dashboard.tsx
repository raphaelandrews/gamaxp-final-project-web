import { useState } from "react";
import { ProductsTable, UsersTable, OrdersTable } from "@/features";

import { G } from "@/styles";
import * as C from "./Dashboard.styles";

export const Dashboard = () => {
    const [isDashboard, setIsDashboard] = useState(<ProductsTable />);

    return (
        <G.Container>
            <C.Title>Painel Administrativo</C.Title>

            <C.ButtonWrapper>
                <C.Button onClick={() => setIsDashboard(<ProductsTable />)}>Products</C.Button>
                <C.Button onClick={() => setIsDashboard(<UsersTable />)}>Users</C.Button>
                <C.Button onClick={() => setIsDashboard(<OrdersTable />)}>Orders</C.Button>
            </C.ButtonWrapper>

            {isDashboard}
        </G.Container>
    )
}
