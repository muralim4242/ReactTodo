var React = require("react");

var TodoSearch = React.createClass({
    handleSearch: function() {
        var searchCompleted = this.refs.searchCompleted.checked;
        var searchText = this.refs.searchText.value;

        this.props.onSearch(searchCompleted, searchText);
    },
    render: function() {
        return (
            <div className="container__header">
                <div>
                    <input type="text" ref="searchText" placeholder="Enter search string" onChange={this.handleSearch}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="searchCompleted" onChange={this.handleSearch}/> Show completed todos
                    </label>
                </div>
            </div>
        );
    }
});

module.exports = TodoSearch;
