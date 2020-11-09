import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoList extends Component {

    render() {
        const { todos } = this.props

        return (
            <div>
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id}>
                            {todo.desc}
                        </li>
                    ))}
                </ul>
            </div >
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;