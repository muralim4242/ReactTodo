var redux=require("redux");
var {showCompltedReducer,searchTextReducer,todosReducer}=require("reducers");

export var configure=(initialState={})=>
{
  var reducers=redux.combineReducers({
    searchText:searchTextReducer,
    showcomplted:showCompltedReducer,
    todos:todosReducer
  })

  var store=redux.createStore(reducers,initialState,redux.compose(window.devToolsExtention?window.devToolsExtention:f=>f));

  return store;
}
