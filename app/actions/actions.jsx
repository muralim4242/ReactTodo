export var setSearchText = (searchText) => {
    return {type: "SET_SEARCH_TEXT", searchText};
}

export var addTodo = (todo) => {
    return {type: "ADD_TODO", todo};
}

export var toggleShowCompleted = () => {
    return {type: "TOGGLE_SHOW_COMPLETED"};
}

export var setTodos = (todos) => {
    return {type: "SET_TODOS", todos}
}

export var toggleTodo = (id) => {
    return {type: "TOGGLE_TODO", id};
}
