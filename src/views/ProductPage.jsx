import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Benefits, EmailForm, Product, ProductSlider } from '../components';
import { fetchProduct } from '../redux/action-creators/productAC';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from '../utils/functions';
import { addToCartAC } from '../redux/action-creators/cartAC';

const ProductPage = () => {
    const { productID } = useParams();
    const dispatch = useDispatch();

    const product = useSelector(state => state.product.productData);
    const productRelatedProducts = product.related_products;
    const { cartItemsId } = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(fetchProduct(productID));
    }, [productID]);

    const onAddToCart = (productID, qnty = 1) => {
        return () => {
            dispatch(addToCartAC(productID, qnty));
        };
    };

    return (
        !isEmpty(product) && (
            <React.Fragment>
                <Product
                    imgSrc={product?.image?.url}
                    name={product?.name}
                    price={product?.price?.formatted_with_symbol}
                    description={product?.description}
                    productAttributes={product?.attributes}
                    id={product?.id}
                    onAddToCart={onAddToCart}
                />

                {productRelatedProducts?.length && (
                    <ProductSlider
                        products={productRelatedProducts}
                        title={'You might also like'}
                        onAddToCart={onAddToCart}
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
