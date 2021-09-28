import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { fetchUsers } from './actions';
import User from './common/User';
import Alert from './common/Alert';
import wrs from '../assets/imgs/wrs.png';
import { Button } from './components/Button';

type Props = {
  state: UserState,
  fetchUsers: () => void
}

type State = {
  userReducer: UserState
}

export const App = ({ state, fetchUsers }: Props) => {
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

const mapStateToProps = (state: State) => ({
  state: state.userReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ fetchUsers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
