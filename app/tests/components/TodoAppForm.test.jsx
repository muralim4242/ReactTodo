var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

var TodoAddForm = require("TodoAddForm");

describe("TodoAddForm", () => {
    it("should exits", () => {
        expect(TodoAddForm).toExist();
    })

    it("should call onAddNewTodo funtion when valid input", () => {
        var spy = expect.createSpy();
        var todoAddForm = TestUtils.renderIntoDocument(<TodoAddForm onAddNewTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todoAddForm));

        todoAddForm.refs.newTodo.value = "asdd";
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith("asdd");
    })

    it("should not call onAddNewTodo funtion when invalid input", () => {
        var spy = expect.createSpy();
        var todoAddForm = TestUtils.renderIntoDocument(<TodoAddForm onAddNewTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todoAddForm));

        todoAddForm.refs.newTodo.value = "";
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    })
})
