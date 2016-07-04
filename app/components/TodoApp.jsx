var React = require("react");
var uuid = require("node-uuid");

var TodoList = require("TodoList");
var TodoAddForm = require("TodoAddForm");
var TodoSearch = require("TodoSearch");
var TodoApi=require("TodoApi");

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            searchCompleted: false,
            searchText: "",
            todos: TodoApi.getTodos()
        }
    },
    componentDidUpdate:function()
    {
      TodoApi.setTodos(this.state.todos);
    },
    handleAddNewTodo: function(newTodo) {
        this.setState({
            todos: [
                ...this.state.todos, {
                    id: uuid(),
                    value: newTodo,
                    completed: false
                }
            ]
        });
    },
    handleSearch: function(searchCompleted, searchText) {
    //    alert("searchCompleted: " + searchCompleted + " and searchText: " + searchText);
        this.setState({searchCompleted: searchCompleted, searchText: searchText});
    },
    handleToggle: function(id) {
        var updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })

        this.setState({todos: updatedTodos})
    },
    render: function() {
        var {todos,searchCompleted,searchText} = this.state;
        var filteredTodos=TodoApi.filterTodos(todos,searchCompleted,searchText);
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                <TodoAddForm onAddNewTodo={this.handleAddNewTodo}/>
            </div>
        );
    }
});

module.exports = TodoApp;
