var expect = require("expect");

var TodoApi = require("TodoApi");

describe("TodoApi", () => {
    beforeEach(() => {
        localStorage.removeItem("todos");
    })
    it('should exist', () => {
        expect(TodoApi).toExist();
    })

    describe("setTodos", () => {
        it("should set localStorage with valid data", () => {
            var todos = [
                {
                    id: 11,
                    value: "test",
                    completed: false
                }
            ]

            TodoApi.setTodos(todos);

            var actualValue = JSON.parse(localStorage.getItem("todos"));

            expect(actualValue).toEqual(todos);

        })

        it("should not set localStorage with invalid data", () => {
            var todos = {
                id: 11,
                value: "test",
                completed: false
            }

            TodoApi.setTodos(todos);

            var actualValue = JSON.parse(localStorage.getItem("todos"));

            expect(actualValue).toEqual(null);

        })
    })

    describe("getTodos", () => {
        it("should return empty array when bad data", () => {
            var actualValue = TodoApi.getTodos();

            expect(actualValue).toEqual([]);
        })

        it("should return todos array when data", () => {
            var todos = [
                {
                    id: 11,
                    value: "test",
                    completed: false
                }
            ]

            localStorage.setItem("todos", JSON.stringify(todos));

            var actualValue = TodoApi.getTodos("todos");

            expect(actualValue).toEqual(todos);

        })
    })
})
