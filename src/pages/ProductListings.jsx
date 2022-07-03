import React, {useEffect, useState} from 'react';
import {ProductList, ProductsAside} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {incrementCurrentPage} from "../redux/reducers/productListingsReducer";
import {AMOUNT_PRODUCTS_ON_PAGE} from "../utils/consts";

const ProductListings = () => {
    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.home.products);
    const {paginatedProducts, currentPage} = useSelector(state => state.productsListings);
    const slicedProducts = allProducts.slice(0, currentPage * AMOUNT_PRODUCTS_ON_PAGE);
    const hasNextPage = allProducts.length > slicedProducts.length;

    const onLoadMore = () => {
        dispatch(incrementCurrentPage());
    }

    return (
        <div className="container productListings">
            <ProductsAside/>
            <ProductList
                products={slicedProducts}
                btnText={'Load more'}
                itemsPerRow={"3"}
                withoutPadding={true}
                withoutContainer={true}
                onClickBtn={onLoadMore}
                hasNextPage={hasNextPage}
            />
        </div>
    );
};

export default ProductListings;