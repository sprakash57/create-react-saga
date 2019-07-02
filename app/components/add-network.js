import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveNetwork} from '../actions/action';

class AddNetwork extends React.Component {
    handleCancel = () => {
        this.props.onCancel(false);
    }
    render() {
        console.log('props--->', this.props);
        return (
                <div>
                    <p>{this.props.data.name}</p>
                    <p>{this.props.data.job}</p>
                    <p>{this.props.data.id}</p>
                    <p>{this.props.data.createdAt}</p>
                    <form onSubmit={this.handleSave}>
                        <label>Age:&nbsp;</label>
                        <input type="number" />
                        <label>Gender:&nbsp;</label>
                        <input type="text" />
                        <button type="submit">save</button>
                        <button onClick={this.handleCancel}>cancel</button>
                    </form>
                </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.verifyReducer
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({saveNetwork}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNetwork)