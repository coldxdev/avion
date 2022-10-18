import React, {useEffect, useState} from 'react';
import {ProductList, ProductsAside} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {
    incrementCurrentPage,
    resetCurrentPage,
    addActivePrice,
    addActiveCategory,
    setCheckboxState,
    removeActiveCategory,
    removeActivePrice
} from "../redux/action-creators/productListingsAC.js";
import {AMOUNT_PRODUCTS_PRODUCTS_LISTINGS, URL_SEPARATOR} from "../utils/consts";
import {getProductsByCategories, getProductsByPrices, getURLParams} from "../utils/functions";
import {useSearchParams} from "react-router-dom";
import { addToCart } from '../redux/action-creators/cartAC';

const ProductsListings = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.app.products);
    const {cartItems} = useSelector(state => state.cart);
    const cartItemsId = cartItems.map(el => el.product_id) || [];

    const {currentPage, activeCategories, activePrices, checkboxesState} = useSelector(state => state.productsListings);
    const [searchParams, setSearchParams] = useSearchParams();

    const URLData = Object.fromEntries(searchParams.entries());
    const keys = ["categories", "prices"];
    const params = getURLParams(URLData, keys)

    useEffect(() => {
        params.categories.forEach(c => {
            if (!checkboxesState[c]?.checked) {
                dispatch(addActiveCategory(c));
            }
    })

        params.prices.forEach(p => {
            if (!checkboxesState[p]?.checked) {
                dispatch(addActivePrice(p));
            }
        })
    }, [])

    useEffect(() => {
        activeCategories.forEach(c => {
            if (!checkboxesState[c]?.checked) {
                dispatch(setCheckboxState(c, true));
            }
        })

        activePrices.forEach(p => {
            if (!checkboxesState[p]?.checked) {
                dispatch(setCheckboxState(p, true));
            }
        })

    }, [activePrices, activeCategories])


    let filteredProductsByCategories = getProductsByCategories(products, activeCategories);
    let filteredProductsByPrice = getProductsByPrices(filteredProductsByCategories, activePrices);

    const slicedProducts = filteredProductsByPrice.slice(0, currentPage * AMOUNT_PRODUCTS_PRODUCTS_LISTINGS);
    const hasNextPage = filteredProductsByPrice.length > slicedProducts.length;

    const onChangeCheckbox = (e) => {
        const checkboxName = e.target.name;
        const checkboxType = e.target.attributes?.filtertype?.value;

        switch (checkboxType) {
            case "categories":
                if (e.target.checked) {
                    dispatch(addActiveCategory(checkboxName));
                    let newCategories;
                    if (URLData.categories && URLData.categories.length > 0) {
                        const newArr = URLData.categories.split(URL_SEPARATOR);
                        newArr.push(checkboxName);
                        newCategories = newArr.join(URL_SEPARATOR);
                    } else {
                        newCategories = checkboxName;
                    }
                    setSearchParams({...URLData, categories: newCategories})
                } else {
                    dispatch(removeActiveCategory(checkboxName));
                    if (URLData.categories.split(URL_SEPARATOR).length === 1) {
                        delete URLData.categories
                        setSearchParams(URLData)
                    } else {
                        setSearchParams({
                            ...URLData,
                            categories: URLData.categories.split(URL_SEPARATOR).filter(c => c !== checkboxName).join(URL_SEPARATOR)
                        })
                    }

                }
                break;

            case "prices":
                if (e.target.checked) {
                    dispatch(addActivePrice(checkboxName));
                    let newPrices;
                    if (URLData.prices && URLData.prices.length > 0) {
                        const newArr = URLData.prices.split(URL_SEPARATOR);
                        newArr.push(checkboxName);
                        newPrices = newArr.join(URL_SEPARATOR);
                    } else {
                        newPrices = checkboxName;
                    }
                    setSearchParams({...URLData, prices: newPrices})
                } else {
                    dispatch(removeActivePrice(checkboxName));
                    if (URLData.prices.split(URL_SEPARATOR).length === 1) {
                        delete URLData.prices
                        setSearchParams(URLData)
                    } else {
                        setSearchParams({
                            ...URLData,
                            prices: URLData.prices.split(URL_SEPARATOR).filter(p => p !== checkboxName).join(URL_SEPARATOR)
                        })
                    }

                }
                break;

        }

        dispatch(setCheckboxState(checkboxName, e.target.checked));
        dispatch(resetCurrentPage());
    }

    const onLoadMore = () => {
        dispatch(incrementCurrentPage());
    }

    const onAddToCart = (productID, qnty) => {
        return () => {
            dispatch(addToCart(productID, qnty));
        };
    };

    return (
        <div className="container productListings">
        <ProductsAside
            checkboxesState={checkboxesState}
            onChangeCheckbox={onChangeCheckbox}
        />
        <ProductList
            products={slicedProducts}
            btnText={'Load more'}
            itemsPerRow={"3"}
            onClickBtn={onLoadMore}
            hasNextPage={hasNextPage}
            withoutPadding
            withoutContainer
            cartItemsId={cartItemsId}
            onAddToCart={onAddToCart}
        />
    </div>
    );
};

export default ProductsListings;
