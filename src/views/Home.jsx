import React from 'react';
import { Benefits, ProductList, ProductSlider, TopBanner, EmailForm, Features } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { NEW_PRODUCTS_CATEGORY, POPULAR_PRODUCTS_CATEGORY } from '../utils/consts';
import { getProductsByCategories } from '../utils/functions';
import { addToCartAC } from '../redux/action-creators/cartAC';

const Home = () => {
    const products = useSelector(state => state.app.products);
    const { cartItemsId } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const newProducts = getProductsByCategories(products, NEW_PRODUCTS_CATEGORY, 4);
    const popularProducts = getProductsByCategories(products, POPULAR_PRODUCTS_CATEGORY);

    const onAddToCart = productId => {
        return () => {
            dispatch(addToCartAC(productId));
        };
    };

    return (
        <React.Fragment>
            <TopBanner />
            <Benefits />
            <ProductList
                title={'New ceramics'}
                products={newProducts}
                btnText={'View collection'}
                href={`/collection/${NEW_PRODUCTS_CATEGORY}`}
                cartItemsId={cartItemsId}
                onAddToCart={onAddToCart}
            />
            <ProductSlider
                title={'Our popular products'}
                products={popularProducts}
                btnText={'View collection'}
                href={`/collection/${POPULAR_PRODUCTS_CATEGORY}`}
                cartItemsId={cartItemsId}
                onAddToCart={onAddToCart}
            />
            <EmailForm />
            <Features />
        </React.Fragment>
    );
};

export default Home;
