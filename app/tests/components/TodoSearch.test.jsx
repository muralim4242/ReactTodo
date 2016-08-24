var React = require("react");
var ReactDom = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

import {TodoSearch} from "TodoSearch";

describe("TodoSearch", () => {
    it("should exits", () => {
        expect(TodoSearch).toExist();
    })

    it("should dispatch SET_SEARCH_TEXT action on set todo text", () => {
        var searchText = "Dog";
        var spy = expect.createSpy();
        var action = {
            type: "SET_SEARCH_TEXT",
            searchText
        };
        var todoSreach = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

        todoSreach.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSreach.refs.searchText);

        expect(spy).toHaveBeenCalledWith(action);
    })

    it("should dispatch TOGGLE_SHOW_COMPLETED action when we click on checkbox", () => {
        var action = {
            type: "TOGGLE_SHOW_COMPLETED"
        };
        var searchCompleted = true;
        var spy = expect.createSpy();
        var todoSreach = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

        todoSreach.refs.searchCompleted.checked = searchCompleted;
        TestUtils.Simulate.change(todoSreach.refs.searchCompleted);

        expect(spy).toHaveBeenCalledWith(action);
    })
})
