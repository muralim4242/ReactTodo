var React = require("react");

var Todo = React.createClass({
    render: function() {
      var {id,value}=this.props;
        return (
            <div>
                {id+". "+ value}
            </div>
        );
    }
});

module.exports = Todo;
