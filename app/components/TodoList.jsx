var React = require("react");
var {connect} = require("react-redux");
import Todo from "Todo";
var TodoApi = require("TodoApi");

export var TodoList = React.createClass({
    render: function() {
        var {todos, showcomplted, searchText} = this.props;
        var renderElement = () => {
          var filterTodos=TodoApi.filterTodos(todos, showcomplted, searchText);
            if (filterTodos.length === 0) {
                return (
                    <p className="container__message">No To Do</p>
                )
            }

            return filterTodos.map((todo) => {
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
