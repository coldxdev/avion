import React from 'react';
import {Benefits, ProductList, ProductSlider, TopBanner, EmailForm, Features} from "../components";
import {useSelector} from "react-redux";
import {NEW_PRODUCTS_CATEGORY, POPULAR_PRODUCTS_CATEGORY} from "../utils/consts";
import {getProductsByCategories} from "../utils/functions";

const Home = () => {
    const products = useSelector(state => state.home.products);

    const newProducts = getProductsByCategories(products, NEW_PRODUCTS_CATEGORY, 4)
    const popularProducts = getProductsByCategories(products, POPULAR_PRODUCTS_CATEGORY);


    return (
        <React.Fragment>
            <TopBanner/>
            <Benefits/>
            <ProductList
                title={'New ceramics'}
                products={newProducts}
                btnText={'View collection'}
                href={`/collection/${NEW_PRODUCTS_CATEGORY}`}
            />
            <ProductSlider
                title={'Our popular products'}
                products={popularProducts}
                btnText={'View collection'}
                href={`/collection/${POPULAR_PRODUCTS_CATEGORY}`}
            />
            <EmailForm/>
            <Features/>
        </React.Fragment>
    );
};

export default Home;