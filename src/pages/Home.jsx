import React, {useEffect, useState} from 'react';
import {Benefits, ProductList, ProductSlider, TopBanner, EmailForm, Features} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {NEW_PRODUCTS_CATEGORY, POPULAR_PRODUCTS_CATEGORY} from "../utils/consts";
import {filterProductsByCategories} from "../utils/functions";

const Home = () => {
    const products = useSelector(state => state.home.products);

    const newProducts = filterProductsByCategories(products, NEW_PRODUCTS_CATEGORY).slice(0, 4)
    const popularProducts = filterProductsByCategories(products, POPULAR_PRODUCTS_CATEGORY).reverse();

    return (
        <>
            <TopBanner/>
            <Benefits/>
            <ProductList
                title={'New ceramics'}
                products={newProducts}
            />
            <ProductSlider
                title={'Our popular products'}
                products={popularProducts}
            />
            <EmailForm/>
            <Features/>
        </>
    );
};

export default Home;