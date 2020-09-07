import React, { Component } from 'react';


class AddTodos extends Component {
    state = {
        content: ''
    }

    handleChange = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.content.length && this.state.content.trim()) {
            this.props.addtodo(this.state);

        }

        this.setState({
            content: ''
        });

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Add Your Task Here..." onChange={this.handleChange} value={this.state.content} ></input>
                <button className="btn" onClick={this.handleClick}>add</button>
            </form>
        )
    }
}




export default AddTodos;