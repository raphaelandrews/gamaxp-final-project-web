import { useEffect, useMemo, useState } from 'react';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import axios from 'axios';
import { Link } from 'react-router-dom';

import * as C from "./OrdersTable.styles";

type Orders = {
    id?: number;
    users_id?: number;
    amount?: number;
    products_id?: number;
};

export const OrdersTable = (props: Orders) => {
    //Requisitar API
    /*const [data, setData] = useState<Orders[]>([]);

    async function getData() {
        const res = await axios.get(`${import.meta.env.VITE_API_HOST}/orders`);
        setData(res.data);
    }

    useEffect(() => {
        getData();
    }, []);

    const columns = useMemo<MRT_ColumnDef<Orders>[]>(
        () => [
            {
                accessorKey: 'id',
                header: 'ID',
                Cell: ({ row }) => (
                    <Link to={`/product/${row?.original?.id}`}>
                        {row?.original?.id}
                    </Link>
                ),

            },
            {
                accessorKey: 'users_id',
                header: 'User',
                Cell: ({ row }) => (
                    <Link to={`/product/${row?.original?.id}`}>
                        {row?.original?.users_id}
                    </Link>
                ),
            },
            {
                accessorKey: 'amount',
                header: 'Total',
                Cell: ({ row }) => (
                    <Link to={`/product/${row?.original?.amount}`}>
                        {row?.original?.amount}
                    </Link>
                ),
            },
            {
                accessorKey: 'products_id',
                header: 'Products',
                Cell: ({ row }) => (
                    <Link to={`/product/${row?.original?.id}`}>
                        {row?.original?.products_id}
                    </Link>
                ),
            },
        ],
        [],
    );*/

    return (
       <C.TableWrapper>
             {/*<MaterialReactTable
                columns={columns}
                data={data}
                enableColumnActions={false}
                enableDensityToggle={false}
                enableHiding={false}
                enableColumnFilters={false} />*/}
        </C.TableWrapper>
    )
};
