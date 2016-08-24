var React = require("react");
var {connect} = require("react-redux");
import Todo from "Todo";
var TodoApi=require("TodoApi");

export var TodoList = React.createClass({
    render: function() {
        var {todos,showcomplted,searchText} = this.props;
        var renderElement = () => {
            if (todos.length === 0) {
                return (
                    <p className="container__message">No To Do</p>
                )
            }

            return TodoApi.filterTodos(todos,showcomplted,searchText).map((todo) => {
                return (<Todo key={todo.id} {...todo}/>)
            })
        };
        return (
            <div>
                {renderElement()}
            </div>
        );
    }
});

export default connect((state) => {
    return state;
})(TodoList);
