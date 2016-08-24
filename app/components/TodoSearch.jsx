var React = require("react");
var {connect} = require("react-redux");
var actions = require("actions");

export var TodoSearch = React.createClass({
    render: function() {
        var {dispatch, showcomplted, searchText} = this.props;
        return (
            <div className="container__header">
                <div>
                    <input type="text" ref="searchText" value={searchText} placeholder="Enter search string" onChange={() => {
                        var searchText = this.refs.searchText.value;
                        dispatch(actions.setSearchText(searchText));
                    }}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" checked={showcomplted} ref="searchCompleted" onChange={() => {
                            dispatch(actions.toggleShowCompleted());
                        }}/>
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }
});

export default connect((state) => {
    return {searchText: state.searchText, searchCompleted: state.searchCompleted}
})(TodoSearch);
