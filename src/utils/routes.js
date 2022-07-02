import {ABOUT_ROUTE, CART_ROUTE, HOME_ROUTE, PRODUCT_ROUTE, PRODUCTS_LISTINGS_ROUTE, PRODUCTS_ROUTE} from "./consts";
import About from "../pages/About";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import ProductListings from "../pages/ProductListings";

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
        path: PRODUCTS_ROUTE,
        Component: Products,
    },
    {
        path: CART_ROUTE,
        Component: CartPage,
    },
    {
        path: PRODUCTS_LISTINGS_ROUTE,
        Component: ProductListings,
    }
    ]
