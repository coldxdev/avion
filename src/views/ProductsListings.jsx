import React, {useEffect} from 'react';
import {ProductList, ProductsAside} from '../components';
import {useDispatch, useSelector} from 'react-redux';
import {
    addActivePrice,
    addActiveCategory,
    setCheckboxState,
    removeActiveCategory,
    removeActivePrice,
} from '../redux/action-creators/productListingsAC.js';
import {incrementCurrentPage, resetCurrentPage} from '../redux/action-creators/appAC';
import {
    AMOUNT_PRODUCTS_PER_PRODUCTS_LISTINGS,
    URL_SEPARATOR
} from '../utils/consts';
import {getProductsByCategories, getProductsByPrices, getURLParams} from '../utils/functions';
import {useSearchParams} from 'react-router-dom';
import {addToCartAC} from '../redux/action-creators/cartAC';

const ProductsListings = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.app.products);
    const {cartItemsId} = useSelector(state => state.cart);

    const {currentPage, activeCategories, activePrices, checkboxesState} = useSelector(
        state => state.productsListings
    );
    const [searchParams, setSearchParams] = useSearchParams();

    const keysForURLParams = ['categories', 'prices'];
    const URLData = Object.fromEntries(searchParams.entries());
    const params = getURLParams(URLData, keysForURLParams);

    const isCheckboxChecked = (checkboxName) => {
        return checkboxesState.find(checkbox => checkbox.name === checkboxName).checked;
    }

    useEffect(() => {
        params.categories.forEach(category => {
            if (isCheckboxChecked(category)) return;
            dispatch(addActiveCategory(category));
        });

        params.prices.forEach(price => {
            if (isCheckboxChecked(price)) return;
            dispatch(addActivePrice(price));
        });

        return () => {
            dispatch(resetCurrentPage())
        }
    }, []);

    useEffect(() => {
        activeCategories.forEach(activeCheckbox => {
            if (isCheckboxChecked(activeCheckbox)) return;
            dispatch(setCheckboxState(activeCheckbox, true));
        });

        activePrices.forEach(activeCheckbox => {
            if (isCheckboxChecked(activeCheckbox)) return;
            dispatch(setCheckboxState(activeCheckbox, true));
        });
    }, [activePrices, activeCategories]);

    let filteredProductsByCategories = getProductsByCategories(products, activeCategories);
    let filteredProductsByPrice = getProductsByPrices(filteredProductsByCategories, activePrices);

    const slicedProducts = filteredProductsByPrice.slice(0, currentPage * AMOUNT_PRODUCTS_PER_PRODUCTS_LISTINGS);
    const hasNextPage = filteredProductsByPrice.length > slicedProducts.length;

    const getUpdatedActiveCheckboxes = (arrayOfActiveCheckbox, checkboxName) => {
        return arrayOfActiveCheckbox && arrayOfActiveCheckbox.length > 0
            ? [...arrayOfActiveCheckbox, checkboxName].join(URL_SEPARATOR)
            : checkboxName
    }

    const getFilteredActiveCheckboxes = (arrayOfActiveCheckbox, checkboxName) => {
        const filteredActiveCheckboxes = arrayOfActiveCheckbox.length === 1
            ? []
            : arrayOfActiveCheckbox
                .filter(activeCheckbox => activeCheckbox !== checkboxName)
                .join(URL_SEPARATOR)

        return filteredActiveCheckboxes;
    }

    const addActiveCheckboxToURL = (checkboxName, type) => {
        if (type === "category") {
            dispatch(addActiveCategory(checkboxName));
            const updatedActiveCategories = getUpdatedActiveCheckboxes(params.categories, checkboxName)
            setSearchParams({...URLData, categories: updatedActiveCategories});
        }

        if (type === "price") {
            dispatch(addActivePrice(checkboxName));
            const updatedActivePrices = getUpdatedActiveCheckboxes(params.prices, checkboxName)
            setSearchParams({...URLData, prices: updatedActivePrices});
        }

    }

    const removeCheckboxFromURL = (checkboxName, type) => {
        if (type === "category") {
            dispatch(removeActiveCategory(checkboxName));
            const filteredActiveCategories = getFilteredActiveCheckboxes(params.categories, checkboxName);
            setSearchParams({...URLData, categories: filteredActiveCategories})
        }

        if (type === "price") {
            dispatch(removeActivePrice(checkboxName));
            const filteredActivePrices = getFilteredActiveCheckboxes(params.prices, checkboxName);
            setSearchParams({...URLData, prices: filteredActivePrices})
        }
    }

    const onChangeCheckbox = e => {
        const checkboxName = e.target.name;
        const checkboxType = e.target.attributes?.filtertype?.value;

        if (e.target.checked) {
            addActiveCheckboxToURL(checkboxName, checkboxType)
        } else {
            removeCheckboxFromURL(checkboxName, checkboxType)
        }

        dispatch(setCheckboxState(checkboxName, e.target.checked));
        dispatch(resetCurrentPage());
    };


    const onLoadMore = () => {
        dispatch(incrementCurrentPage());
    };

    const addToCart = (productID, qnty) => {
        dispatch(addToCartAC(productID, qnty));
    };

    return (
        <div className='container productListings'>
            <ProductsAside
                checkboxesState={checkboxesState}
                onChangeCheckbox={onChangeCheckbox}
            />
            <ProductList
                products={slicedProducts}
                btnText={'Load more'}
                itemsPerRow={'3'}
                onClickBtn={onLoadMore}
                hasNextPage={hasNextPage}
                withoutPadding
                withoutContainer
                cartItemsId={cartItemsId}
                addToCart={addToCart}
            />
        </div>
    );
};

export default ProductsListings;
