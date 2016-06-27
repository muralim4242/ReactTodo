var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
$(document).foundation();

//Added custom css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <p>Final boilerplate project</p>, document.getElementById('app'));
