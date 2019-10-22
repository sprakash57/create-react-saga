import React from 'react';
import {hot} from 'react-hot-loader';
import {Form, Input} from 'reactstrap';
import '../app/index.css';
import AccountLookup from './components/account-lookup';
import AddNetwork from './components/add-network';

export class App extends React.Component {
    state = {
        name: '',
        job: '',
        insert: true
    }
    handleSubmit = e => {
        let obj = {}
        e.preventDefault();
        let form = document.forms.namedItem('fileinfo');
        let oData = new FormData(form);
        for (let [key, value] of oData.entries()) {
            obj[key] = value
        }
        console.log(obj);
    }

    handleChange = (e) => {
        if (e.target.value.length === 2 && this.state.insert) {
            let item = e.target.value + ':';
            this.setState({[e.target.name]: item, insert: false})
        } else
            this.setState({[e.target.name]: e.target.value, insert: true})
    }

    render() {
        return (
            <div className='app'>
                <Form onSubmit={this.handleSubmit} name="fileinfo">
                    <label>Name:&nbsp;</label>
                    <Input type='text' value={this.state.name} name='name' onChange={this.handleChange}/>
                    <label>Job:&nbsp;</label>
                    <Input type='text' name='job' value={this.state.job} onChange={this.handleChange}/>
                    <button type="submit">Verify</button>
                </Form>
            </div>
        );
    }
}

export default App;