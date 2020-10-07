import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from './actions';
import User from './components/User';

const App = ({ users, fetchUsers }) => {
    const loadUsers = () => {
        fetchUsers();
    }
    return (
        <main className="container">
            <h1>Click Fetch to get All the users</h1>
            <button onClick={loadUsers}>Fetch</button>
            <section className="users">
                {users.length
                    ? users.map(user => <User key={user.id} user={user} />)
                    : null
                }
            </section>
        </main>
    )
}

App.propTypes = {
    users: PropTypes.array.isRequired,
    fetchUsers: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    users: state.userReducer.users
})

const mapDispatchToProps = dispatch => bindActionCreators({ fetchUsers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);