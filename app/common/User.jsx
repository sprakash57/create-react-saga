import React from 'react';
import PropTypes from 'prop-types';

export default function User({ user }) {
    const { name, email, address: { street, city }, phone } = user;
    return (
        <section className="user">
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Address: {street}, {city}</p>
            <p>Phone: {phone}</p>
        </section>
    )
}

User.propTypes = {
    user: PropTypes.object.isRequired,
}
