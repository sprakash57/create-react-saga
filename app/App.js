import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postLookup } from './actions/action';
import './index.css';

const App = ({ users, postLookup }) => {
    const [loading, setLoading] = useState(false);
    const fetchUsers = () => {
        postLookup();
        setLoading(true);
    }

    const renderUsers = () => {
        if (users.data.length !== 0) {
            return users.data.map((user, i) => (
                <div className="row mt-5" key={i}>
                    <div className="col">
                        <p>Name: {user.first_name} {user.last_name}</p>
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
            <button className="btn btn-primary mt-2" onClick={fetchUsers}>Fetch</button>
            {loading
                ? <p className='mt-5'>Loading...</p>
                : renderUsers()
            }
        </div>
    )
}

App.propTypes = {
    users: PropTypes.object.isRequired,
    postLookup: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    users: state.verifyReducer.users
})

const mapDispatchToProps = dispatch => bindActionCreators({ postLookup }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);