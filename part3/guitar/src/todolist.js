import React from 'react';
import './todo.css'

export default class TodoList extends React.Component {
    constructor() {
        super();

        this.state = {
            todos:[{
                id:1,
                text: "Todo smth",
                isDone: false
            }, {
                id:2,
                text: "Todo smth 2",
                isDone: false
            }]
        }
    }
    toggleIsDone(id){
        this.setState((state)=> ({
            todos: state.todos.map(todo => todo.id === id ? {...todo, isDone:!todo.isDone}: todo)
        }))
    }
    render() {
        return( <div className="todo-list-container">
            {this.state.todos.map( todo => (
                <div key={todo.id} className="todo-list-item">
                    <button className="todo-list-status" onClick={()=>this.toggleIsDone(todo.id)}><span>{todo.isDone ? "~": "!"}</span></button>
                    <span className="todo-list-text">{todo.text}</span>
                </div>
            ))}
        </div>)
    }
}