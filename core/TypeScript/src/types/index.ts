interface User {
    id: number;
    name: string;
    email: string;
    address: {
        city: string,
        street: string
    },
    phone: string;
}