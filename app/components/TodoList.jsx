var React = require("react");

var Todo = require("Todo");

var TodoList = React.createClass({
    render: function() {
        var {todos} = this.props;
        var renderElement = () => {
            if (todos.length === 0) {
                return (
                    <p className="container__message">No To Do</p>
                )
            }

            return todos.map((todo) => {
                return (<Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>)
            })
        };
        return (
            <div>
                {renderElement()}
            </div>
        );
    }
});

module.exports = TodoList;
