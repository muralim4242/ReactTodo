var redux=require("redux");
var {showCompltedReducer,searchTextReducer,todosReducer}=require("reducers");

export var configure=()=>
{
  var reducers=redux.combineReducers({
    searchText:searchTextReducer,
    showcomplted:showCompltedReducer,
    todos:todosReducer
  })

  var store=redux.createStore(reducers,redux.compose(window.devToolsExtention?window.devToolsExtention:f=>f));

  return store;
}
