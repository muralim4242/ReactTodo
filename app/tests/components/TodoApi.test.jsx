var expect = require("expect");

var TodoApi = require("TodoApi");

describe("TodoApi", () => {
    beforeEach(() => {
        localStorage.removeItem("todos");
    })
    it('should exist', () => {
        expect(TodoApi).toExist();
    })

    describe("filterTodos", () => {
        var todos = [
            {
                id: 11,
                value: "test",
                completed: true
            }, {
                id: 12,
                value: "test",
                completed: true
            }, {
                id: 13,
                value: "test some",
                completed: false
            }
        ]

        it("should return all array if showcomplted is true", () => {
            var actualValue = TodoApi.filterTodos(todos, true, "");

            expect(actualValue.length).toEqual(3);
        })

        it("should return non-completed todo array if showcomplted is false", () => {
            var actualValue = TodoApi.filterTodos(todos, false, "");

            expect(actualValue.length).toEqual(1);
        })

        it("should return non-completed as a first elements in the array", () => {
            var actualValue = TodoApi.filterTodos(todos, true, "")

            expect(actualValue[0].completed).toBe(false);
        })

        it("should return searchText todos if todos contains", () => {
            var actualValue = TodoApi.filterTodos(todos, true, "som")

            expect(actualValue.length).toEqual(1);
        })

        it("should return all todos when search text is empty", () => {
            var actualValue = TodoApi.filterTodos(todos, true, "")

            expect(actualValue.length).toEqual(3);
        })
    })
})
