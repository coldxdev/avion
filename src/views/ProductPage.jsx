import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Benefits, EmailForm, Product, ProductSlider } from '../components';
import { fetchProduct } from '../redux/action-creators/productAC';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from '../utils/functions';
import { addToCart } from '../redux/action-creators/cartAC';

const ProductPage = () => {
    const { productID } = useParams();

    const product = useSelector(state => state.product.productData);
    const productRelatedProducts = product.related_products;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProduct(productID));
    }, [productID]);

    const onAddToCart = (productID, qnty) => {
        return () => {
            dispatch(addToCart(productID, qnty));
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
                     />
                )}

                <Benefits />
                <EmailForm />
            </React.Fragment>
        )
    );
};

export default ProductPage;
