import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Benefits, EmailForm, Product, ProductSlider} from "../components";
import {fetchProduct} from "../redux/action-creators/productAC";
import {useDispatch, useSelector} from "react-redux";
import {isEmpty} from "../utils/functions";

const ProductPage = () => {
    const {productID} = useParams();

    const product = useSelector(state => state.product.productData);
    const productRelatedProducts = product.related_products;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProduct(productID));
    }, [productID])

    return (
        <>
            <Product
                imgSrc={product?.image?.url}
                name={product?.name}
                price={product?.price?.formatted_with_symbol}
                description={product?.description}
                productAttributes={product?.attributes}
                id={product?.id}
            />
            
            {productRelatedProducts?.length &&
                <ProductSlider
                    products={productRelatedProducts}
                    title={'You might also like'}
                />
            }

            <Benefits/>
            <EmailForm/>
        </>
    );
};

export default ProductPage;
