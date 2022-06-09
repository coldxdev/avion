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
        exact: true,
    },
    {
        path: ABOUT_ROUTE,
        Component: About,
        exact: true,
    },
    {
        path: PRODUCT_ROUTE,
        Component: ProductPage,
        exact: true,
    },
    {
        path: PRODUCTS_ROUTE,
        Component: Products,
        exact: true,
    },
    {
        path: CART_ROUTE,
        Component: Cart,
        exact: true,
    }]
