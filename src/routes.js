import {
    ABOUT_ROUTE,
    CART_ROUTE,
    COLLECTION_ROUTE,
    HOME_ROUTE,
    PRODUCT_ROUTE,
    PRODUCTS_LISTINGS_ROUTE,
} from "./utils/consts";
import About from "./views/About";
import Home from "./views/Home";
import ProductPage from "./views/ProductPage";
import CartPage from "./views/CartPage";
import ProductsListings from "./views/ProductsListings";
import Collection from "./views/Collection";

export const routes = [
    {
        path: HOME_ROUTE,
        Component: Home,
    },
    {
        path: ABOUT_ROUTE,
        Component: About,
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
    }
]
