import React from 'react';
import { ProductList } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCategories } from '../utils/functions';
import { useParams } from 'react-router-dom';
import { incrementCurrentPage } from '../redux/action-creators/appAC';
import { AMOUNT_PRODUCTS_COLLECTION } from '../utils/consts';
import { addToCart } from '../redux/action-creators/cartAC';

const Collection = () => {
    const dispatch = useDispatch();
    const { categorySlug } = useParams();
    const products = useSelector(state => state.app.products);
    const { currentPage, categories } = useSelector(state => state.collection);
    const currentCategory = categories?.find(c => c.slug === categorySlug);

    const cartItemsId = useSelector(state => state.cart.cartItems).map(el => el.product_id) || [];

    let filteredProducts = getProductsByCategories(products, categorySlug);
    const slicedProducts = filteredProducts.slice(0, currentPage * AMOUNT_PRODUCTS_COLLECTION);
    const hasNextPage = filteredProducts.length > slicedProducts.length;

    const onLoadMore = () => {
        dispatch(incrementCurrentPage());
    };

    const onAddToCart = (productID, qnty) => {
        return () => {
            dispatch(addToCart(productID, qnty));
        };
    };

    return (
        currentCategory && (
            <ProductList
                title={currentCategory.name}
                products={slicedProducts}
                hasNextPage={hasNextPage}
                onClickBtn={onLoadMore}
                btnText={'Load more'}
                cartItemsId={cartItemsId}
                onAddToCart={onAddToCart}
            />
        )
    );
};

export default Collection;
