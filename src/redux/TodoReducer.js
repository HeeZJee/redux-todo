const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [{ id: Date.now(), desc: action.desc, }, ...state];

        default:
            return state;
    }
}

export default todoReducer;