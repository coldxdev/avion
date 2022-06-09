import {ABOUT_ROUTE, CART_ROUTE, HOME_ROUTE, PRODUCT_ROUTE, PRODUCTS_ROUTE} from "./consts";
import About from "../pages/About";
import Home from "../pages/Home";
import Product from "../pages/ProductPage";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import ProductPage from "../pages/ProductPage";

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
        Component: Cart,
    }]
