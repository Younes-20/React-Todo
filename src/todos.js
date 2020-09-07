import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
    // cycle through data
    const listTodos = todos.length ? (
        todos.map(todo => {
            return (
                <div className="items" key={todo.id}>
                    <ul>
                        <li>{todo.content}</li>
                        <button className="btn1" onClick={() => deleteTodo(todo.id)}><i className="fas fa-trash-restore"></i></button>
                    </ul>
                </div>
            )
        })
    ) : (
            <p className="text">You have no todo's left!</p>
        );

    // output it to the DOM
    return (
        <div>
            {listTodos}
        </div>
    )
}



export default Todos;