import { useEffect, useMemo, useState } from 'react';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import axios from 'axios';
import { Link } from 'react-router-dom';

import * as C from "./ProductsTable.styles";

type Products = {
    price: number;
    product_name: string;
    description: string;
    category: any;
    category_name: string;
    id: number;
    photo: string;
};

export const ProductsTable = (props: Products) => {
    //Requisitar API
    const [data, setData] = useState<Products[]>([]);

    async function getData() {
        const res = await axios.get(`${import.meta.env.VITE_API_HOST}/produto`);
        setData(res.data);
    }

    useEffect(() => {
        getData();
    }, []);

    const columns = useMemo<MRT_ColumnDef<Products>[]>(
        () => [
            {
                accessorKey: 'product_name',
                header: 'Name',
                Cell: ({ row }) => (
                    <Link to={`/product/${row?.original?.id}`}>
                        <C.CellWrapper>
                            <img src={`src/assets/img/${row?.original?.photo}`} />
                            {row?.original?.product_name}
                        </C.CellWrapper>
                    </Link>
                ),
            },
            {
                accessorKey: 'price',
                header: 'Price',
                Cell: ({ row }) => (
                    <Link to={`/product/${row?.original?.id}`}>
                        ${" "}{row?.original?.price}
                    </Link>
                ),
            },
            {
                accessorKey: 'category.category_name',
                header: 'Category',
                Cell: ({ row }) => (
                    <Link to={`/product/${row?.original?.id}`}>
                        {row?.original?.category.category_name}
                    </Link>
                ),
            },
            {
                accessorKey: 'id',
                header: 'ID',
                Cell: ({ row }) => (
                    <Link to={`/product/${row?.original?.id}`}>
                        {row?.original?.id}
                    </Link>
                ),
            },
        ],
        [],
    );

    return (
        <C.TableWrapper>
            <C.LinkWrapper>
                <Link to="/createProduct">Add new product</Link>
            </C.LinkWrapper>
            <MaterialReactTable
                columns={columns}
                data={data}
                enableColumnActions={false}
                enableDensityToggle={false}
                enableHiding={false}
                enableColumnFilters={false}
            />
        </C.TableWrapper>
    )
};
