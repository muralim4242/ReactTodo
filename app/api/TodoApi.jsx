var $ = require('jQuery');

module.exports = {
    getTodos: () => {
        var stringyfyTodos = localStorage.getItem("todos");
        var todos = [];

        try {
            todos = JSON.parse(stringyfyTodos);
        } catch (e) {}

        return $.isArray(todos)
            ? todos
            : [];
    },
    setTodos: (todos) => {
        if ($.isArray(todos)) {
            localStorage.setItem("todos", JSON.stringify(todos));
            return todos;
        }
    },
    filterTodos: (todos, searchCompleted, searchText) => {
        var filteredTodos = todos;

        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || searchCompleted;
        })

        return filteredTodos;
    }
};
