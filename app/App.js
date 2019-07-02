import React from 'react';
import {hot} from 'react-hot-loader';
import '../app/index.css';
import AccountLookup from './components/account-lookup';
import AddNetwork from './components/add-network';

export class App extends React.Component {
    state = {
        isVerified: false
    }
    handleVisibility = (isVerifiedFlag) => {
        this.setState({isVerified: isVerifiedFlag})
    }
    render() {
        return (
            <div className='app'>
                {!this.state.isVerified ? <AccountLookup onVerify={this.handleVisibility}/> : <AddNetwork onCancel={this.handleVisibility}/>}
            </div>
        );
    }
}

export default hot(module)(App);