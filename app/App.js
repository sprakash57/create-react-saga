import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from './actions';
import User from './common/User';
import Alert from './common/Alert';
import reactLogo from '../assets/reactLogo.svg';
import webpackLogo from '../assets/webpackLogo.svg';
import reduxLogo from '../assets/reduxLogo.svg';
import { Button } from './components/Button';

export const App = ({ state, fetchUsers }) => {
  const { users, loading, message } = state;

  const loadUsers = () => {
    fetchUsers();
  };

  const renderUser = () => {
    if (message) return <Alert message={message} />;
    return (
      <section className="users">
        {users.length
          ? users.map((user) => <User key={user.id} user={user} />)
          : null}
      </section>
    );
  };

  return (
    <main className="t-center">
      <ul className="logos">
        <li>
          <img src={webpackLogo} className="logo" alt="webpackLogo" />
        </li>
        <li>
          <img src={reactLogo} className="logo" alt="reactLogo" />
        </li>
        <li>
          <img src={reduxLogo} className="logo" alt="reduxLogo" />
        </li>
      </ul>
      <h1>Click Fetch & let Saga does the rest.</h1>
      <Button label="Fetch" onClick={loadUsers} />
      {loading ? <Alert message="Loading..." /> : renderUser()}
    </main>
  );
};

App.propTypes = {
  state: PropTypes.object.isRequired,
  fetchUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  state: state.userReducer,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchUsers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
