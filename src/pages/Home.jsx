import React from 'react';
import {Benefits, ProductList, ProductSlider, TopBanner, EmailForm} from "../components";
import {productsList, productsSlider} from "../utils/mockup";

const Home = () => {
    return (
        <>
            <TopBanner/>
            <Benefits/>
            <ProductList
                title={'New ceramics'}
                products={productsList}
            />
            <ProductSlider
                title={'Our popular products'}
                products={productsSlider}
            />
            <EmailForm/>
        </>
    );
};

export default Home;