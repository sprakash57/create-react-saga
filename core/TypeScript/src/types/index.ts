interface User {
    id: number;
    name: string;
    email: string;
    address: {
        city: string,
        street: string
    },
    phone: string;
    username?: string;
    website?: string;
    compnay?: string;
}

interface UserState {
    users: User[];
    loading: boolean;
    message: string;
}

interface UserAction {
    type: string;
    data: User[] | string;
}