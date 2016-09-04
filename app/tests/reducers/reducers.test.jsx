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
                todo: {
                    id: 1,
                    value: "murali",
                    completed: false,
                    createdAt: 500
                }
            }

            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(action.todo);

        })

        it("should update todo", () => {
          var updated={
            completed:false,
            completedAt:null
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

            var action = {
                type: "UPDATE_TODO",
                id: todos[0].id,
                updated
            }


            var res = reducers.todosReducer(df(todos), df(action));

            expect(res[0].completed).toEqual(updated.completed);
            expect(res[0].completedAt).toEqual(updated.completedAt);
            expect(res[0].value).toEqual(todos[0].value);

        })

        it("should add todos", () => {
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
            };

            var res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        })
    })
})
