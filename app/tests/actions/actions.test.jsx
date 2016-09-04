import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
var expect = require("expect");
var actions = require("actions");

var createMockStore = configureMockStore([thunk]);
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
            todo: {
                id: 1,
                value: "murali",
                completed: false,
                createdAt: 500
            }
        }

        var res = actions.addTodo(action.todo);
        expect(res).toEqual(action);
    })

    it("shoud create todo and dispatch ADD_TODO acton", (done) => {
        const store = createMockStore({});
        const myTodoText = "Add time entry";

        store.dispatch(actions.startAddTodo(myTodoText)).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toInclude({type: "ADD_TODO"});
            expect(actions[0].todo).toInclude({value: myTodoText})
            done();
        }).catch(done);
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

    it("Should generate update todo action", () => {
        var action = {
            type: "UPDATE_TODO",
            id: 1,
            updated:{
              completed:false
            }
        }

        var res = actions.updateTodo(action.id,action.updated);
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
