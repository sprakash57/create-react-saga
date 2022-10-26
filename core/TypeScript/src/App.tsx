import React from 'react';
import { fetchUsers } from 'store/users';
import wrs from 'assets/images/wrs.png';
import { Button, User } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import appInfo from '../package.json';

const App = () => {
  const { users, isLoading, message } = useAppSelector(state => state.usersReducer);
  const dispatch = useAppDispatch();

  const renderUser = () => {
    if (isLoading) return <h2>Loading...</h2>
    if (message) return <h2>{message}</h2>
    return (
      <section className="users">
        {users.length
          ? users.map((user) => <User key={user.id} user={user} data-testid="user" />)
          : null}
      </section>
    );
  };

  return (
    <main className='main'>
      <nav className='main__navbar'>
        <div className='main__brand'>
          <h1>Create React Saga</h1>
          <sub>v{appInfo.version}</sub>
        </div>
        <div>
          <a className='links card' href="https://github.com/sprakash57/create-react-saga" rel="noopener noreferrer" target="_blank">GitHub</a>
          <a className='links card' href="https://sprakash57.github.io/create-react-saga" rel="noopener noreferrer" target="_blank">Docs</a>
        </div>
      </nav>
      <img src={wrs} className="main__logo" alt="create-react-saga" />
      <section>
        <Button label="Click to run Saga" variant="success" onClick={() => dispatch(fetchUsers())} data-testid="succss-btn" />
      </section>
      {renderUser()}
    </main>
  );
};

export default App;
