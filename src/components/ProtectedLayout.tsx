import React, { Children, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext/useAuth"
import { getUserLocalStorage } from "../context/AuthContext/util";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
    const auth = useAuth()

    if (!auth.email) {
        return <h1>Você não tem acesso</h1>;
    }

    return children;
};

export const ProtectedDashboard = ({ children }: { children: JSX.Element }) => {
    const user = getUserLocalStorage();
    const navigate = useNavigate();


    useEffect(() => {
        const AdminPanel = () => {
            if (user.type != "admin") {
                navigate("/");
            } else {
                return children
            }
        }

        user ? AdminPanel() : navigate("/")
    }, []);

    return children;
};