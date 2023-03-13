import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Container, Title } from "@/components";
import { getUserLocalStorage } from '@/context';

export const Profile = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        //getData();
        const token = getUserLocalStorage();

        async function getData() {
            const res = await axios.get(`${import.meta.env.VITE_API_HOST}/user/`, {
                headers: {
                    authorization: `${token}`,
                },
            });
            setData(res.data);
        }
    }, []);

    return (
        <Container>
            <>
                <Title text="Hello" />
                <div></div>
            </>
        </Container>
    )
}


