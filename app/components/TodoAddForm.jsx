var React = require("react");

var TodoAddForm = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();
        var newTodo = this.refs.newTodo.value;
        if (newTodo.length > 0) {
            this.refs.newTodo.value = '';
            this.props.onAddNewTodo(newTodo);
        }
        else {
          this.refs.newTodo.focus();
        }
    },
    render: function() {
        return (
            <div className="container__footer">
                <form ref="form" onSubmit={this.onSubmit} className="todo-add-form">
                    <input type="text" ref="newTodo" placeholder="Enter the name of new todo"/>
                    <button className="button expanded">Add</button>
                </form>
            </div>
        );
    }
});

module.exports = TodoAddForm;
