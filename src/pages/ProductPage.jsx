import React from 'react';
import {useParams} from "react-router-dom";
import {product, productsList} from "../utils/mockup";
import {Benefits, EmailForm, Product, ProductList} from "../components";

const ProductPage = (props) => {
    const params = useParams();

    return (
        <>
            <Product product={product}/>
            <ProductList products={productsList} title={'You might also like'}/>
            <Benefits/>
            <EmailForm />
        </>
    );
};

export default ProductPage;