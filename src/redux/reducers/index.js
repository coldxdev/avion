import {combineReducers} from "redux";
import appReducer from "./appReducer";
import homeReducer from "./homeReducer";
import productListingsReducer from "./productListingsReducer";
import productReducer from "./productReducer";
import collectionReducer from "./collectionReducer";
import cartReducer from "./cartReducer";

const reducers = combineReducers({
    app: appReducer,
    home: homeReducer,
    productsListings: productListingsReducer,
    product: productReducer,
    collection: collectionReducer,
    cart: cartReducer,
})

export default reducers;