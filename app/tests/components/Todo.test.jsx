var React = require("react");
var ReactDom = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

var {Todo} = require("Todo");

describe("Todo", () => {
    it("should exits", () => {
        expect(Todo).toExist();
    });

    it("should dispatch TOGGLE_TODO action on click", () => {
        var todos = {
            id: 11,
            value: "Test",
            completed: true
        };
        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo {...todos} dispatch={spy}/>);

        var $el = $(ReactDom.findDOMNode(todo));

        TestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith(
          {
            type:"TOGGLE_TODO",
            id:todos.id
          }
        );

    });
})
