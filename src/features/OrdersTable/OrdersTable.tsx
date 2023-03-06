import { useEffect, useMemo, useState } from 'react';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import axios from 'axios';
import { Link } from 'react-router-dom';

import * as C from "./OrdersTable.styles";

type Person = {
    name: {
        firstName: string;
        lastName: string;
    };
    address: string;
    city: string;
    state: string;
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Person[] = [
    {
        name: {
            firstName: 'John',
            lastName: 'Doe',
        },
        address: '261 Erdman Ford',
        city: 'East Daphne',
        state: 'Kentucky',
    },
    {
        name: {
            firstName: 'Jane',
            lastName: 'Doe',
        },
        address: '769 Dominic Grove',
        city: 'Columbus',
        state: 'Ohio',
    },
    {
        name: {
            firstName: 'Joe',
            lastName: 'Doe',
        },
        address: '566 Brakus Inlet',
        city: 'South Linda',
        state: 'West Virginia',
    },
    {
        name: {
            firstName: 'Kevin',
            lastName: 'Vandy',
        },
        address: '722 Emie Stream',
        city: 'Lincoln',
        state: 'Nebraska',
    },
    {
        name: {
            firstName: 'Joshua',
            lastName: 'Rolluffs',
        },
        address: '32188 Larkin Turnpike',
        city: 'Omaha',
        state: 'Nebraska',
    },
];

export const OrdersTable = () => {
    //Requisitar API
    const [data1, setData] = useState([]);

    async function getData() {
        const res = await axios.get(`http://localhost:5000/produto`);
        setData(res.data);
        console.log(res.data)
    }

    useEffect(() => {
        getData();
    }, []);



    //should be memoized or stable
    const columns = useMemo<MRT_ColumnDef<Person>[]>(
        () => [
            {
                accessorKey: 'name.firstName',
                header: 'Username',
                Cell: ({ row }) => (
                    <Link to={`/product/${row?.original?.name.firstName}`}>
                        {row?.original?.name.firstName}
                    </Link>
                ),

            },
            {
                accessorKey: 'name.lastName',
                header: 'Email',
                Cell: ({ row }) => (
                    <Link to={`/product/${row?.original?.name.firstName}`}>
                        {row?.original?.name.lastName}
                    </Link>
                ),
            },
        ],
        [],
    );

    return (
        <C.TableWrapper>
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
