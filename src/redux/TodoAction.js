const ADD_TODO = "ADD_TODO"


const addTodo = (value) => {
    return {
        type: ADD_TODO,
        desc: value,
    }
}

export default addTodo;