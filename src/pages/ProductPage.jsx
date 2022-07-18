import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {productsList} from "../utils/mockup";
import {Benefits, EmailForm, Product, ProductList, ProductSlider} from "../components";
import {fetchProduct} from "../redux/reducers/productReducer";
import {useDispatch, useSelector} from "react-redux";
import {isEmpty} from "../utils/functions";

const ProductPage = (props) => {
    const {productID} = useParams();

    const product = useSelector(state => state.product.productData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProduct(productID));
    }, [productID])

    return (!isEmpty(product) && <>
            <Product
                imgSrc={product.image.url}
                name={product.name}
                price={product.price.formatted_with_symbol}
                description={product.description}
                attributes={product.attributes}
            />
            <ProductSlider
                products={product.related_products}
                title={'You might also like'}
            />
            <Benefits/>
            <EmailForm/>
        </>


    );
};

export default ProductPage;