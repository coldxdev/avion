import React from 'react';
import { ProductList } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCategories } from '../utils/functions';
import { useParams } from 'react-router-dom';
import { fetchCollectionData, incrementCurrentPage } from '../redux/action-creators/collectionAC';
import { AMOUNT_PRODUCTS_COLLECTION } from '../utils/consts';
import { addToCart } from '../redux/action-creators/cartAC';
import { useEffect } from 'react';

const Collection = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.app.products);
    const {collectionData, currentPage} = useSelector(state => state.collection);
    const { categoryID } = useParams();

    //TODO: Сделать правильный запрос по categoryID, для получения названия

    // useEffect(() => {
    //     dispatch(fetchCollectionData(categoryID));
    // }, [categoryID])

    const { cartItems } = useSelector(state => state.cart);
    const cartItemsId = cartItems.map(el => el.product_id) || [];

    let filteredProducts = getProductsByCategories(products, categoryID);

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
        <ProductList
            title={'New products'}
            products={slicedProducts}
            hasNextPage={hasNextPage}
            onClickBtn={onLoadMore}
            btnText={'Load more'}
            cartItemsId={cartItemsId}
            onAddToCart={onAddToCart}
        />
    );
};

export default Collection;
