import { useState } from "react";
import OrdersTable from "../../components/OrdersTable/OrdersTable";
import ProductsTable from "../../components/ProductsTable/ProductsTable";
import UsersTable from "../../components/UsersTable/UsersTable";
import * as G from "../../styles/GlobalStyles";
import * as C from "./styles";

const Dashboard = () => {
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

export default Dashboard