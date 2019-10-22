import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {postLookup} from '../actions/action';
import BrInput from '../components/BrInput';

class AccountLookup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            account: '',
            security: '',
            isSaved: false
        }
    }

    handleVerify = (e) => {
        e.preventDefault();
        //console.dir(e.target);
        this.props.onVerify(true);
        //this.props.postLookup({name: "morpheus",job: "leader"});
        this.props.postLookup({name: this.state.name, job: this.state.job})
        this.setState({isSaved: true})
    }

    handleChange = (name, value) => {
        //console.log("account-lookup",name,value);
        this.setState({[name]: value});
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <form onSubmit={this.handleVerify} noValidate>
                    <label>Name:&nbsp;</label>
                    <BrInput type='text' name='name' mandatory={true} fieldLen={3} isSaved={this.state.isSaved} onChange={this.handleChange}/>
                    <label>Job:&nbsp;</label>
                    <BrInput type='text' name='job' mandatory={false} fieldLen={3} isSaved={this.state.isSaved} onChange={this.handleChange}/>
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