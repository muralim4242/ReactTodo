var React = require("react");

var TodoList = require("TodoList");

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
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
    render: function() {
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos}/>
            </div>
        );
    }
});

module.exports = TodoApp;
