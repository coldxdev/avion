import React from 'react';
import {Benefits, ProductList, ProductSlider, TopBanner} from "../components";
import {productsList} from "../utils/mockup";

const Home = () => {
    return (
        <>
            <TopBanner/>
            <Benefits/>
            <ProductList
                products={productsList}
                title={'New ceramics'}
            />
            <ProductSlider />
        </>
    );
};

export default Home;