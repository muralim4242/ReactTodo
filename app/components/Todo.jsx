var React = require("react");
var moment = require("moment");
var {connect} = require("react-redux");
var actions = require("actions");

export var Todo = React.createClass({
    render: function() {
        var {
            id,
            value,
            completed,
            createdAt,
            completedAt,
            dispatch
        } = this.props;
        var todoClassName = completed
            ? "todo todo-completed"
            : "todo";
        var renderDate = () => {
            var message = "Created ";
            var timeStamp = createdAt;

            if (completed) {
                message = "Completed ";
                timeStamp = completedAt;
            }

            return message + moment.unix(timeStamp).format("MMM Do YYYY @ hh:mm a");
        }
        return (
            <div className={todoClassName} onClick={() => {
                dispatch(actions.toggleTodo(id));
            }}>
                <div>
                    <input type="checkbox" checked={completed} onChange={() => {}}/>
                </div>
                <div>
                    <p>{value}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        );
    }
});

export default connect()(Todo);
