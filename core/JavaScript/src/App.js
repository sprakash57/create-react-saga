import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from './actions';
import User from 'common/User';
import Alert from 'common/Alert';
import wrs from '../assets/wrs.png';
import { Button } from 'components/Button';

export const App = ({ state, fetchUsers }) => {
  const { users, loading, message } = state;
  const loadUsers = () => {
    fetchUsers();
  };

  const renderUser = () => {
    if (message) return <Alert message={message} data-testid="alert" />;
    return (
      <section className="users">
        {users.length
          ? users.map((user) => <User key={user.id} user={user} data-testid="user" />)
          : null}
      </section>
    );
  };

  return (
    <main className="t-center">
      <img src={wrs} className="logo" alt="webpackLogo" />
      <h1 className="t-header">Click <Button label="Fetch" variant="success" onClick={loadUsers} data-testid="succss-btn" /> & let Saga do the rest.</h1>
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
