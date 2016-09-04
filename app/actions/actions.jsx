import firebase, {firebaseRef} from "app/firebase";
import moment from "moment";

export var setSearchText = (searchText) => {
    return {type: "SET_SEARCH_TEXT", searchText};
}

export var addTodo = (todo) => {
    return {type: "ADD_TODO", todo};
}

export var toggleShowCompleted = () => {
    return {type: "TOGGLE_SHOW_COMPLETED"};
}

export var startToggleTodo = (id, completed) => {
    return (dispatch, getState) => {

        var todoRef = firebaseRef.child(`todos/${id}`);
        var updated = {
            completed,
            completedAt: completed
                ? moment().unix()
                : null
        }

        return todoRef.update(updated).then(() => {
            return dispatch(updateTodo(id, updated));
        });

    }
}

export var startAddTodo = (value) => {
    return (dispatch, getState) => {
        var todo = {
            value,
            completed: false,
            createdAt: moment().unix(),
            completedAt: null
        };

        var todoRef = firebaseRef.child("todos").push(todo);

        return todoRef.then(() => {
            dispatch(addTodo({
                ...todo,
                id: todoRef.key
            }))
        })
    }
}

export var setTodos = (todos) => {
    return {type: "SET_TODOS", todos}
}

export var updateTodo = (id, updated) => {
    return {type: "UPDATE_TODO", id, updated};
}
