import {combineReducers} from "redux";
import pageReducer from "./pageReducer";
import homeReducer from "./homeReducer";
import productListingsReducer from "./productListingsReducer";
import productReducer from "./productReducer";

const reducers = combineReducers({
    app: pageReducer,
    home: homeReducer,
    productsListings: productListingsReducer,
    product: productReducer,
})

export default reducers;