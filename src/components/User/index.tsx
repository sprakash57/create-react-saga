import React from 'react';

type Props = { user: User }

export default function User({ user }: Props) {
    const { name, email, address: { city, street }, phone } = user;
    return (
        <section className="user card">
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Address: {street}, {city}</p>
            <p>Phone: {phone}</p>
        </section>
    )
}

