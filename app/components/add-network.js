import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {postLookup, postSave} from '../actions/action';
import {fakeApi} from '../api';
import AddPayble from './add-payble';

class AddNetwork extends React.Component {
    state = {
        addText: ''
    }
    handleSave = (e) => {
        e.preventDefault();
        console.dir(e.target);
    }

    handleChange = (e) => {
        this.setState({addText: e.target.value})
    }

    render() {
            return (
                <div>
                    <form onSubmit={this.handleSave}>
                        <label htmlFor="add">Text</label>
                        <textarea 
                            id="add" 
                            name="add" 
                            rows={3} 
                            cols={10} 
                            wrap="hard"
                            value={this.state.addText}
                            onChange={this.handleChange}>
                        </textarea>
                        <input type="hidden"></input>
                        <button type="submit">save</button>
                    </form>
                    <p>{this.state.addText}</p>
                </div>
                
        );

    }
}

const mapStateToProps = state => ({
    data: state.verifyReducer
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({postLookup, postSave}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNetwork)