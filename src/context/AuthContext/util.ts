import { IUser } from './types';
import { Api } from "../../services/api";

export function setUserLocalStorage(user: IUser | null) {
    localStorage.setItem("u", JSON.stringify(user));
}

export function getUserLocalStorage() {
    const json = localStorage.getItem("u")

    if (!json) {
        return null;
    }

    const user = JSON.parse(json)

    return user ?? null;
}

export async function LoginRequest(email: string, password: string) {
    try {
        const request = await Api.get("login", {
            auth: {
                username: email,
                password: password,
            },
        });

        return request.data;
    } catch (error) {

        return null;
    }
}

export async function SignUpRequest(username: string, email: string, password: string) {
    try {
        const request = await Api.post("signup", { username, email, password });
console.log(request.data)
        return request.data;
    } catch (error) {
        return null;
    }
}