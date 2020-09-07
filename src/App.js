import React, { Component } from 'react';
import Todos from './todos';
import AddTodos from './addTodos';

class App extends Component {
  state = {
    todos: []
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: todos
    });
  }

  addTodo = (todo) => {
    localStorage.setItem('Todos', this.state.todos);
    todo.id = Math.random();
    let newTodos = [...this.state.todos, todo];
    this.setState({
      todos: newTodos

    })


  };

  render() {
    return (
      <div className="app">
        <header className="title">
          <h1>Todo<span>List</span></h1>
        </header>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodos addtodo={this.addTodo} />
      </div>
    )
  }
}


export default App;










