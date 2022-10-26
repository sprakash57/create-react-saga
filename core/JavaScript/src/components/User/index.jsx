import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => {
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

User.propTypes = {
    user: PropTypes.object.isRequired,
}

export default User;
