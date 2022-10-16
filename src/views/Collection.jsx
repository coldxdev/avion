import React from 'react';
import { ProductList } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCategories } from '../utils/functions';
import { useParams } from 'react-router-dom';
import { incrementCurrentPage } from '../redux/action-creators/collectionAC';
import { AMOUNT_PRODUCTS_COLLECTION } from '../utils/consts';

const Collection = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.home.products);
    const currentPage = useSelector(state => state.collection.currentPage);
    const { categoryID } = useParams();

    const {cartItems} = useSelector(state => state.cart);
    const cartItemsId = cartItems.map(el => el.product_id) || [];

    let filteredProducts = getProductsByCategories(products, categoryID);

    const slicedProducts = filteredProducts.slice(0, currentPage * AMOUNT_PRODUCTS_COLLECTION);
    const hasNextPage = filteredProducts.length > slicedProducts.length;

    const onLoadMore = () => {
        dispatch(incrementCurrentPage());
    };

    return (
        <ProductList
            title={'New products'}
            products={slicedProducts}
            hasNextPage={hasNextPage}
            onClickBtn={onLoadMore}
            btnText={'Load more'}
            cartItemsId={cartItemsId}
        />
    );
};

export default Collection;
