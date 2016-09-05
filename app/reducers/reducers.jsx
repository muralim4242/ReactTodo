export var searchTextReducer = (state = '', action) => {
    switch (action.type) {
        case "SET_SEARCH_TEXT":
            return action.searchText;
        default:
            return state;
    }
}

export var showCompltedReducer = (state = false, action) => {
    switch (action.type) {
        case "TOGGLE_SHOW_COMPLETED":
            return !state;
        default:
            return state;
    }
}

export var todosReducer = (state = [], action) => {
    switch (action.type) {

        case "ADD_TODO":
            return [
                ...state,
                action.todo
            ];
        case "UPDATE_TODO":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                      ...action.updated
                    }
                } else {
                    return todo;
                }
            });
        case "SET_TODOS":
            return [
                ...state,
                ...action.todos
            ]
        default:
            return state;
    }
}
