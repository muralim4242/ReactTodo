import * as redux from "redux";
import thunk from "redux-thunk";

import {showCompltedReducer, searchTextReducer, todosReducer} from "reducers";

export var configure = (initialState = {}) => {
    var reducers = redux.combineReducers({searchText: searchTextReducer, showcomplted: showCompltedReducer, todos: todosReducer})

    var store = redux.createStore(reducers, initialState, redux.compose(redux.applyMiddleware(thunk), window.devToolsExtention
        ? window.devToolsExtention
        : f => f));

    return store;
}
