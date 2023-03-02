export interface IUser {
    username?: string;
    email?: string;
    token?: string;
}

export interface IContext extends IUser {
    authenticate: (email: string, password: string) => Promise<void>;
    register: (username:string, email: string, password: string) => Promise<void>;
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element | JSX.Element[];
}