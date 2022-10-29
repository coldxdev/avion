import {
    CART_ROUTE,
    COLLECTION_ROUTE,
    HOME_ROUTE,
    PRODUCT_ROUTE,
    PRODUCTS_LISTINGS_ROUTE,
    SEARCH_ROUTE,
} from "./utils/consts";
import Home from "./views/Home";
import ProductPage from "./views/ProductPage";
import CartPage from "./views/CartPage";
import ProductsListings from "./views/ProductsListings";
import Collection from "./views/Collection";
import SearchPage from './views/SearchPage';

export const routes = [
    {
        path: HOME_ROUTE,
        Component: Home,
    },
    {
        path: PRODUCT_ROUTE,
        Component: ProductPage,
    },
    {
        path: CART_ROUTE,
        Component: CartPage,
    },
    {
        path: PRODUCTS_LISTINGS_ROUTE,
        Component: ProductsListings,
    },
    {
        path: COLLECTION_ROUTE,
        Component: Collection,
    },
    {
        path: SEARCH_ROUTE,
        Component: SearchPage,
    }
]
