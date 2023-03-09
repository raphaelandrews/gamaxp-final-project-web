import { useEffect, useMemo, useState } from 'react';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import axios from 'axios';
import { Link } from 'react-router-dom';

import * as C from "./ProductsTable.styles";

type Products = {
    price?: number;
    product_name?: string;
    description?: string;
    category?: any;
    category_name?: string;
    id?: number;
    photo?: string;
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
            {
                accessorKey: 'id',
                header: 'Actions',
                Cell: ({ row }) => (
                    <C.ActionsWrapper>
                        <Link to={`/delete-product/${row?.original?.id}`}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path d="M11 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-2"
                                    stroke="var(--first-color)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                </path>
                                <path d="M16.04 3.02 8.16 10.9c-.3.3-.6.89-.66 1.32l-.43 3.01c-.16 1.09.61 1.85 1.7 1.7l3.01-.43c.42-.06 1.01-.36 1.32-.66l7.88-7.88c1.36-1.36 2-2.94 0-4.94-2-2-3.58-1.36-4.94 0Z"
                                    stroke="var(--first-color)"
                                    strokeWidth="2"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                </path>
                                <path d="M14.91 4.15a7.144 7.144 0 0 0 4.94 4.94"
                                    stroke="var(--first-color)"
                                    strokeWidth="2"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                </path>
                            </svg>
                        </Link>
                        <Link to={`/edit-product/${row?.original?.id}`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path d="M21 5.98c-3.33-.33-6.68-.5-10.02-.5-1.98 0-3.96.1-5.94.3L3 5.98M8.5 4.97l.22-1.31C8.88 2.71 9 2 10.69 2h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3M18.85 9.14l-.65 10.07C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14M10.33 16.5h3.33M9.5 12.5h5"
                                    stroke="var(--third-color)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                </path>
                            </svg>
                        </Link>
                    </C.ActionsWrapper>
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
