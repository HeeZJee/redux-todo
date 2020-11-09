import React, { Component } from 'react';
import { connect } from 'react-redux'
import TodoList from './TodoList';
import TodoForm, { mapStateToProps, mapDispatchToProps } from './TodoForm'

class Todo extends Component {



    render() {
        const { todos, addTodo } = this.props

        return (
            <div>
                <h1>My Todo App</h1>
                <TodoForm todos={todos} addTodo={addTodo} />
                <TodoList todos={todos} />
            </div>
        );
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Todo)