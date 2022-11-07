import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Benefits, EmailForm, Product, ProductSlider } from '../components';
import { fetchProduct } from '../redux/action-creators/productAC';
import { useDispatch, useSelector } from 'react-redux';
import {getProductAttributes, isEmpty} from '../utils/functions';
import { addToCartAC } from '../redux/action-creators/cartAC';
import {ATTRIBUTE_DEPTH, ATTRIBUTE_HEIGHT, ATTRIBUTE_IS_BIG, ATTRIBUTE_WIDTH} from "../utils/consts";

const ProductPage = () => {
    const { productID } = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.product.productData);
    const relatedProducts = product.related_products;
    const { cartItemsId } = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(fetchProduct(productID));
    }, [productID]);

    const addToCart = (productID, qnty) => {
        dispatch(addToCartAC(productID, qnty));
    };

    const requiredAttributes = [ATTRIBUTE_DEPTH, ATTRIBUTE_WIDTH, ATTRIBUTE_HEIGHT, ATTRIBUTE_IS_BIG];
    const attributes = getProductAttributes(product.attributes, requiredAttributes);

    return (
        !isEmpty(product) && (
            <React.Fragment>
                <Product
                    imgSrc={product.image.url}
                    name={product.name}
                    price={product.price.formatted_with_symbol}
                    description={product?.description}
                    width={attributes.width}
                    height={attributes.height}
                    depth={attributes.depth}
                    isBig={attributes.is_big}
                    id={product.id}
                    addToCart={addToCart}
                />

                {relatedProducts?.length && (
                    <ProductSlider
                        products={relatedProducts}
                        title={'You might also like'}
                        addToCart={addToCart}
                        cartItemsId={cartItemsId}
                    />
                )}

                <Benefits />
                <EmailForm />
            </React.Fragment>
        )
    );
};

export default ProductPage;
