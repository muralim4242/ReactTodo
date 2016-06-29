var React = require("react");
var uuid = require("node-uuid");

var TodoList = require("TodoList");
var TodoAddForm = require("TodoAddForm");
var TodoSearch = require("TodoSearch");

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            searchCompleted: false,
            searchText: "",
            todos: [
                {
                    id: uuid(),
                    value: "murali"
                }, {
                    id: uuid(),
                    value: "tharu"
                }, {
                    id: uuid(),
                    value: "murali"
                }, {
                    id: uuid(),
                    value: "tharu"
                }
            ]
        }
    },
    handleAddNewTodo: function(newTodo) {
        this.setState({
            todos: [
                ...this.state.todos, {
                    id: uuid(),
                    value: newTodo
                }
            ]
        });
    },
    handleSearch: function(searchCompleted, searchText) {
        alert("searchCompleted: " + searchCompleted + " and searchText: " + searchText);
        this.setState({searchCompleted: searchCompleted, searchText: searchText});
    },
    render: function() {
        var {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos}/>
                <TodoAddForm onAddNewTodo={this.handleAddNewTodo}/>
            </div>
        );
    }
});

module.exports = TodoApp;
