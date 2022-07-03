import {applyMiddleware, combineReducers, createStore} from "redux";
import pageReducer from "./reducers/pageReducer";
import homeReducer from "./reducers/homeReducer";
import thunk from "redux-thunk";
import productListingsReducer from "./reducers/productListingsReducer";

const reducers = combineReducers({
    app: pageReducer,
    home: homeReducer,
    productsListings: productListingsReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
window.store = store;