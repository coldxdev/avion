import React, {useState} from 'react';
import {ProductList, ProductsAside} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {incrementCurrentPage} from "../redux/reducers/productListingsReducer";
import {AMOUNT_PRODUCTS_ON_PAGE} from "../utils/consts";
import {getProductsByCategories, getProductsByPrices} from "../utils/functions";

const ProductListings = () => {
    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.home.products);
    const {currentPage} = useSelector(state => state.productsListings);

    let activeCategories = [];
    let activePrices = [];

    console.log(allProducts)

    const [checkboxesState, setCheckboxesState] = useState({
        "0-100": {
            checked: false,
            type: "price",
        },
        "101-250": {
            checked: false,
            type: "price",
        },
        "250+": {
            checked: false,
            type: "price",
        },
        "furniture": {
            checked: false,
            type: "category",
        },
        "homeware": {
            checked: false,
            type: "category",
        },
        "sofas": {
            checked: false,
            type: "category",
        },
        "light-fittings": {
            checked: false,
            type: "category",
        },
        "robert-smith": {
            checked: false,
            type: "category",
        },
        "liam-gallagher": {
            checked: false,
            type: "category",
        },
        "biggie-smalls": {
            checked: false,
            type: "category",
        },
        "thom-yorke": {
            checked: false,
            type: "category",
        },
    });

    for (let key in checkboxesState) {
        const item = checkboxesState[key];

        if (item.type === "category" && item.checked) {
            activeCategories = [...activeCategories, key];
        }
        if (item.type === "price" && item.checked) {
            activePrices = [...activePrices, key];
        }
    }


    let filteredProducts = getProductsByCategories(allProducts, activeCategories);
    let testProducts = getProductsByPrices(filteredProducts, activePrices);

    const slicedProducts = testProducts.slice(0, currentPage * AMOUNT_PRODUCTS_ON_PAGE);
    const hasNextPage = testProducts.length > slicedProducts.length;

    const onChangeCheckbox = (e) => {
        const checkboxName = e.target.name;
        const newCheckboxState = {...checkboxesState[checkboxName], checked: e.target.checked};

        setCheckboxesState({...checkboxesState, [checkboxName]: newCheckboxState})
    }

    const onLoadMore = () => {
        dispatch(incrementCurrentPage());
    }

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
                withoutPadding={true}
                withoutContainer={true}
                onClickBtn={onLoadMore}
                hasNextPage={hasNextPage}
            />
        </div>
    );
};

export default ProductListings;