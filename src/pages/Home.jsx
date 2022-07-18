import React, {useEffect, useState} from 'react';
import {Benefits, ProductList, ProductSlider, TopBanner, EmailForm, Features} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {NEW_PRODUCTS_CATEGORY, POPULAR_PRODUCTS_CATEGORY} from "../utils/consts";
import {getProductsByCategories} from "../utils/functions";

const Home = () => {
    const products = useSelector(state => state.home.products);

    const newProducts = getProductsByCategories(products, NEW_PRODUCTS_CATEGORY).slice(0, 4)
    const popularProducts = getProductsByCategories(products, POPULAR_PRODUCTS_CATEGORY).reverse();

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
                btnText={'View collection'}
            />
            <EmailForm/>
            <Features/>
        </>
    );
};

export default Home;