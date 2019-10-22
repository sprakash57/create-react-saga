import React from 'react';

export default class AddPayble extends React.Component {

    state = {
        employee: '',
        role: ''
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        console.log(name, value);
        //this.props.onChange(name, value);
        this.setState({[name]: value});
    }

    render() {
        return (
                <div>
                    <label>Employee:&nbsp;</label>
                    <input type="text" name="employee" value={this.state.employee} onChange={this.handleChange}/>
                    <label>Role:&nbsp;</label>
                    <input type="text" name="role" value={this.state.role} onChange={this.handleChange} />
                </div>
        );
    }
}