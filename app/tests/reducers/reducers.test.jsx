var expect = require("expect");
var df = require("deep-freeze-strict");

var reducers = require("reducers");

describe("Reducers", () => {
    describe("Set text reducer", () => {
        it("should set searchText", () => {
            var action = {
                type: "SET_SEARCH_TEXT",
                searchText: "Dog"
            }
            var res = reducers.searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        })
    })

    describe("toggleShowCompleted reducer", () => {
        it("should toggle showcomplted", () => {
            var action = {
                type: "TOGGLE_SHOW_COMPLETED"
            }

            var res = reducers.showCompltedReducer(df(false), df(action))

            expect(res).toEqual(true);
        })
    })

    describe("todos reducer", () => {
        it("should add todo to todos array", () => {
            var action = {
                type: "ADD_TODO",
                value: "walk a dog"
            }

            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0].value).toEqual(action.value);

        })

        it("should toggle todo", () => {
            var action = {
                type: "TOGGLE_TODO",
                id: 11
            }

            var todos = [
                {
                    id: 11,
                    value: "hey",
                    completed: true,
                    createdAt: 123,
                    completedAt: 125
                }
            ]
            var res = reducers.todosReducer(df(todos), df(action));

            expect(res[0].completed).toEqual(false);
            expect(res[0].completedAt).toEqual(undefined);

        })
    })
})
