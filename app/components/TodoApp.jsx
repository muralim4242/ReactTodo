var React = require("react");

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
                    id: 1,
                    value: "murali"
                }, {
                    id: 2,
                    value: "tharu"
                }, {
                    id: 3,
                    value: "murali"
                }, {
                    id: 4,
                    value: "tharu"
                }
            ]
        }
    },
    handleAddNewTodo: function(newTodo) {
        alert(newTodo);

    },
    handleSearch: function(searchCompleted, searchText) {
        alert("searchCompleted: " + searchCompleted + " and searchText: " + searchText);
        this.setState({
          searchCompleted:searchCompleted,
          searchText:searchText
        });
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
