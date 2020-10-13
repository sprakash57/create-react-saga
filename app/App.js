import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from './actions';
import User from './components/User';
import Alert from './components/Alert';
import logo from './assets/logo.svg';

const App = ({ state, fetchUsers }) => {
    const { users, loading, message } = state;

    const loadUsers = () => {
        fetchUsers();
    }

    const renderUser = () => {
        if (message) return <Alert message={message} />
        return <section className="users">
            {users.length
                ? users.map(user => <User key={user.id} user={user} />)
                : null
            }
        </section>
    }

    return (
        <main className="t-center">
            <img src={logo} className="logo" alt="logo" />
            <h1>Click Fetch & let Saga does the rest.</h1>
            <button onClick={loadUsers}>Fetch</button>
            {loading ? <Alert message="Loading..." /> : renderUser()}
        </main>
    )
}

App.propTypes = {
    state: PropTypes.object.isRequired,
    fetchUsers: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    state: state.userReducer
})

const mapDispatchToProps = dispatch => bindActionCreators({ fetchUsers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
