var React = require("react");
var ReactDom = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

var TodoSearch = require("TodoSearch");

describe("TodoSearch", () => {
    it("should exits", () => {
        expect(TodoSearch).toExist();
    })

    it("should call onSearch function with searchText", () => {
        var searchText = "Dog";
        var spy = expect.createSpy();
        var todoSreach = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

        todoSreach.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSreach.refs.searchText);

        expect(spy).toHaveBeenCalledWith(false, "Dog");
    })

    it("should call onSearch function with searchCompleted checkbox", () => {
        var searchCompleted = true;
        var spy = expect.createSpy();
        var todoSreach = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

        todoSreach.refs.searchCompleted.checked = searchCompleted;
        TestUtils.Simulate.change(todoSreach.refs.searchCompleted);

        expect(spy).toHaveBeenCalledWith(true, "");
    })
})
