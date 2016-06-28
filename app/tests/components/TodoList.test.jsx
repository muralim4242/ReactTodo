var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

var TodoList = require("TodoList");
var Todo = require("Todo");

describe("TodoList", () => {
    it("should exits", () => {
        expect(TodoList).toExist();
    })

    it("should render one todo component for each todo item", () => {
        var todos = [
            {
                id: 1,
                value: "murali"
            }, {
                id: 2,
                value: "tharu"
            }
        ];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todoComponents.length).toBe(todos.length);
    })
})
