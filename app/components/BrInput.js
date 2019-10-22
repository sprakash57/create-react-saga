import React from 'react';

export default class BrInput extends React.Component {
    state = {
        inputValue: '',
        lengthError: false,
        mandatoryError: false
    }

    handleBlur = (e) => this.setState({inputValue: e.target.value})
    handleChange = (e) => {
        console.log(e.target.value, e.target.name);
        this.props.onChange(e.target.name, e.target.value);
    }

    componentWillReceiveProps(nextProps) {
        //console.log('willreceiveProps');
        if (nextProps.isSaved && this.props.mandatory) {
            this.setState({mandatoryError: true})
        } else {
            this.setState({mandatoryError: false})
        }
    }

    render() {
        return (
            <input 
                type={this.props.type} 
                name={this.props.name}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                className={this.state.mandatoryError ? 'lookuperror' : ''}
                />
        );
    }
}