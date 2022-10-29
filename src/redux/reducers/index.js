import {combineReducers} from "redux";
import appReducer from "./appReducer";
import productListingsReducer from "./productListingsReducer";
import productReducer from "./productReducer";
import collectionReducer from "./collectionReducer";
import cartReducer from "./cartReducer";
import searchReducer from "./searchReducer";

const reducers = combineReducers({
    app: appReducer,
    productsListings: productListingsReducer,
    product: productReducer,
    collection: collectionReducer,
    cart: cartReducer,
    search: searchReducer,
})

export default reducers;
