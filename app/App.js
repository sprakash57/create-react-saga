import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from './actions';
import './index.css';

const App = ({ users, fetchUsers }) => {

    const [loading, setLoading] = useState(false);
    const loadUsers = () => {
        fetchUsers();
        setLoading(true);
    }

    const renderUsers = () => {
        if (users.length !== 0) {
            return users.map(user => (
                <div className="row mt-5" key={user.id}>
                    <div className="col">
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <hr />
                    </div>
                </div>
            ))
        }
        return null;
    }

    useEffect(() => {
        setLoading(false);
    }, [users]);

    return (
        <div className="container mt-5 text-center">
            <h3>Click Fetch to list all users</h3>
            <button className="btn btn-primary mt-2" onClick={loadUsers}>Fetch</button>
            {loading
                ? <p className='mt-5'>Loading...</p>
                : renderUsers()
            }
        </div>
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