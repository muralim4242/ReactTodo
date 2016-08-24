var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

var {TodoAddForm} = require("TodoAddForm");

describe("TodoAddForm", () => {
    it("should exits", () => {
        expect(TodoAddForm).toExist();
    })

    it("should dispatch ADD_TODO whene valid todo text", () => {
        var spy = expect.createSpy();
        var action={
          type:"ADD_TODO",
          todo:"asdd"
        }
        var todoAddForm = TestUtils.renderIntoDocument(<TodoAddForm dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todoAddForm));

        todoAddForm.refs.newTodo.value = "asdd";
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    })

    it("should not dispatch ADD_TODO when invalid todo text", () => {
        var spy = expect.createSpy();
        var todoAddForm = TestUtils.renderIntoDocument(<TodoAddForm dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todoAddForm));

        todoAddForm.refs.newTodo.value = "";
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    })
})
