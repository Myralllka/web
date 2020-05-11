import React from 'react';
import './todo.css'

export default class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            pages:[]
        }
    }

    render() {
        // return( <div className="todo-list-container">
        //     {this.state.todos.map( todo => (
        //         <div key={todo.id} className="todo-list-item">
        //             <button className="todo-list-status" onClick={()=>this.toggleIsDone(todo.id)}><span>{todo.isDone ? "~": "!"}</span></button>
        //             <span className="todo-list-text">{todo.text}</span>
        //         </div>
        //     ))}
        // </div>)
        return(<div className="header">

        </div>)
    }
}