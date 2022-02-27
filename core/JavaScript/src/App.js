import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './store/users';
import wrs from '../assets/wrs.png';
import { Button, Alert, User } from './components';

const App = () => {
  const { users, isLoading, message } = useSelector(state => state.usersReducer);
  const dispatch = useDispatch();

  const loadUsers = () => {
    dispatch(fetchUsers());
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
      <h1 className="t-header">
        <span>Click </span>
        <Button label="Fetch" variant="success" onClick={loadUsers} data-testid="succss-btn" />
        <span> & let Saga do the rest. </span>
        <span>Explore <a href="https://sprakash57.github.io/create-react-saga" rel="noopener noreferrer" target="_blank">Docs</a> for more.</span>
      </h1>
      {isLoading ? <Alert message="Loading..." /> : renderUser()}
    </main>
  );
};

export default App;
