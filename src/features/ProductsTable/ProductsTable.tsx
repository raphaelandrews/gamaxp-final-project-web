import { useEffect, useMemo, useState } from 'react';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import axios from 'axios';
import { Link } from 'react-router-dom';

import * as C from "./ProductsTable.styles";

import StoreProducts from "../../data/items.json";

type Products = {
    price: number;
    name: string;
    category: string;
    id: number;
    imgUrl: string;
};

export const ProductsTable = () => {
    //Requisitar API
    const [data1, setData] = useState([]);

    async function getData() {
        const res = await axios.get(`http://localhost:5000/produto`);
        setData(res.data);
    }

    useEffect(() => {
        getData();
    }, []);

    //nested data is ok, see accessorKeys in ColumnDef below
    const data: Products[] = [StoreProducts][0];

    //should be memoized or stable
    const columns = useMemo<MRT_ColumnDef<Products>[]>(
        () => [
            {
                accessorKey: 'name',
                header: 'Name',
                Cell: ({ row }) => (
                    <Link to={`/product/${row?.original?.id}`}>
                        <C.CellWrapper>
                            <img src={row?.original?.imgUrl} />
                            {row?.original?.name}
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
                accessorKey: 'category',
                header: 'Category',
                Cell: ({ row }) => (
                    <Link to={`/product/${row?.original?.id}`}>
                        {row?.original?.category}
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
