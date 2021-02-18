import {createStore,compose,applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';  
import {catalogReducer,productListReducer} from './reducers/productReducers';

const initalState={
};

const reducer=combineReducers({
    catalogData:catalogReducer,
    productListData:productListReducer
}); 

// To start redux dev tools in chrome 
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=createStore(reducer,initalState,composeEnhancer(applyMiddleware(thunk)));






