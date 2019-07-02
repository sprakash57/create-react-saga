import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {postLookup} from '../actions/action';

class AccountLookup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            account: '',
            security: ''
        }
    }

    handleVerify = (e) => {
        e.preventDefault();
        this.props.onVerify(true);
        this.props.postLookup({"name": "morpheus","job": "leader"});
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleVerify}>
                    <label>Account number:&nbsp;</label>
                    <input type="number" name="account" value={this.state.account} onChange={this.handleChange}/>
                    <label>Security name:&nbsp;</label>
                    <input type="text" name="security" value={this.state.security} onChange={this.handleChange}/>
                    <button type="submit">Verify</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({postLookup}, dispatch);
}

export default connect(null, mapDispatchToProps)(AccountLookup);