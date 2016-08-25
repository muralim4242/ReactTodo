var expect = require("expect");
var actions = require("actions");

describe("Action", () => {
    it("Should generate setSearchText action", () => {
        var action = {
            type: "SET_SEARCH_TEXT",
            searchText: "murali"
        }

        var res = actions.setSearchText(action.searchText);
        expect(res).toEqual(action);
    })

    it("Should generate addTodo action", () => {
        var action = {
            type: "ADD_TODO",
            todo: "murali"
        }

        var res = actions.addTodo(action.todo);
        expect(res).toEqual(action);
    })

    it("Should generate addTodos action object", () => {
        var todos = [
            {
                id: 1,
                value: "murali",
                completed: false,
                completedAt: undefined,
                createdAt: 500
            }
        ];
        var action = {
            type: "SET_TODOS",
            todos
        }

        var res = actions.setTodos(todos);
        expect(res).toEqual(action);
    })

    it("Should generate toggle todo action", () => {
        var action = {
            type: "TOGGLE_TODO",
            id: 1
        }

        var res = actions.toggleTodo(action.id);
        expect(res).toEqual(action);
    })

    it("Should generate show completed action", () => {
        var action = {
            type: "TOGGLE_SHOW_COMPLETED"
        }

        var res = actions.toggleShowCompleted();
        expect(res).toEqual(action);
    })
})
