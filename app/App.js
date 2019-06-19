import React from 'react';
import {hot} from 'react-hot-loader';
import '../app/index.css';

export class App extends React.Component {
    render() {
        return (
            <div className='app'>
                <p>React without CRA</p>
            </div>
        );
    }
}

export default hot(module)(App);