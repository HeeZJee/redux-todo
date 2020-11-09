import React, { Component } from 'react';
import PropTypes from 'prop-types';
import addTodo from './../redux/TodoAction'


class TodoForm extends Component {
    state = {
        value: ''
    }


    todoSubmitHandler = (event) => {
        event.preventDefault()
        const value = this.state.value
        this.props.addTodo(value)
    }

    render() {
        const { todos } = this.props

        return (
            <div>
                <form onSubmit={this.todoSubmitHandler}>
                    <input type="text"
                        placeholder="e.g. Start Workout"
                        value={todos.desc}
                        onChange={e => this.setState({ value: e.target.value })}
                    />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

TodoForm.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    addTodo: PropTypes.func.isRequired
};

export const mapStateToProps = state => ({ todos: state })
export const mapDispatchToProps = dispatch => ({
    addTodo: (value) => dispatch(addTodo(value))
})



export default TodoForm;