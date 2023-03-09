import { useEffect, useMemo, useState } from 'react';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import axios from 'axios';
import { Link } from 'react-router-dom';

import * as C from "./UsersTable.styles";

type Person = {
    id?: number;
    user_name?: string;
    email?: string;
    type?: string;
};

export const UsersTable = (props: Person) => {
    //Requisitar API
    const [data, setData] = useState<Person[]>([]);

    async function getData() {
        const res = await axios.get(`${import.meta.env.VITE_API_HOST}`);
        setData(res.data);
    }

    useEffect(() => {
        getData();
    }, []);

    const columns = useMemo<MRT_ColumnDef<Person>[]>(
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
                accessorKey: 'user_name',
                header: 'User',
                Cell: ({ row }) => (
                    <Link to={`/user/${row?.original?.id}`}>
                        {row?.original?.user_name}
                    </Link>
                ),

            },
            {
                accessorKey: 'email',
                header: 'Email',
                Cell: ({ row }) => (
                    <Link to={`/product/${row?.original?.id}`}>
                        {row?.original?.email}
                    </Link>
                ),
            },
            {
                accessorKey: 'type',
                header: 'Type',
                Cell: ({ row }) => (
                    <Link to={`/product/${row?.original?.id}`}>
                        {row?.original?.type}
                    </Link>
                ),
            },
        ],
        [],
    );

    return (
        <C.TableWrapper>
            <C.LinkWrapper>
                <Link to="/createAdmin">Add new admin</Link>
            </C.LinkWrapper>
            <MaterialReactTable
                columns={columns}
                data={data}
                enableColumnActions={false}
                enableDensityToggle={false}
                enableHiding={false}
                enableColumnFilters={false} />
        </C.TableWrapper>
    )
};
