var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

var TodoApp = require("TodoApp");

describe("TodoApp", () => {
    it("should exits", () => {
        expect(TodoApp).toExist();
    })

    it("should add todo to todos state on handleAddNewTodo", () => {
        var todoText = "Hay";
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

        todoApp.setState({todos: []})
        todoApp.handleAddNewTodo(todoText);

        expect(todoApp.state.todos[0].value).toBe(todoText);
        expect(todoApp.state.todos[0].createdAt).toBeA("number");
    })

    it("should toggle completed when handleToggle called", () => {
        var todos = [
            {
                id: 11,
                value: "hey",
                completed: false,
                createdAt: 0,
                completedAt: undefined
            }
        ]

        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: todos});

        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(true);
        expect(todoApp.state.todos[0].completedAt).toBeA("number");
    })

    it("should toggle true or false and completedAt to undefined", () => {
        var todos = [
            {
                id: 11,
                value: "hey",
                completed: false,
                createdAt: 0,
                completedAt: undefined
            }
        ]

        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: todos});

        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(true);
        expect(todoApp.state.todos[0].completedAt).toBeA("number");
        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(false);
        expect(todoApp.state.todos[0].completedAt).toNotExist();

    })

})
