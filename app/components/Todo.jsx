var React = require("react");

var Todo = React.createClass({
    render: function() {
        var {id, value, completed} = this.props;
        return (
            <div onClick={() => {
                this.props.onToggle(id)
            }}>
                <input type="checkbox" checked={completed}/> {value}
            </div>
        );
    }
});

module.exports = Todo;
