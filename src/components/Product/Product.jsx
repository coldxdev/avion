import React, { useState } from 'react';
import s from './Product.module.scss';
import PropTypes from 'prop-types';
import { Button, Counter } from '../index';
import ProductMockupImg from '../../assets/images/product-image-mockup.jpg';
import cn from 'classnames';
import LazyLoad from 'react-lazy-load';

const Product = ({ imgSrc, name, price, description, width, height, depth, isBig, id, addToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const onClickBtn = () => {
        if (quantity < 1) return;
        addToCart(id, quantity);
    };

    return (
        <div
            className={cn(s.product, {
                [s.isBig]: isBig,
            })}
        >
            <div className={cn('container', s.wrapper)}>
                <LazyLoad className={s.img} offset={300}>
                    <img src={imgSrc ? imgSrc : ProductMockupImg} loading={'lazy'} alt={`Image ${name}`} />
                </LazyLoad>
                <div className={s.content}>
                    <div className={s.top}>
                        <h1 className={s.name}>{name}</h1>
                        <p className={s.price}>{price}</p>
                    </div>
                    {description && (
                        <div className={s.desc}>
                            <h5 className={s.descTitle}>Product description</h5>
                            <div className='commerceEditor' dangerouslySetInnerHTML={{ __html: description }} />
                        </div>
                    )}
                    {height > 0 && (
                        <div className={s.dimensions}>
                            <h5 className={s.dimensionsTitle}>Dimensions</h5>

                            <div className={s.dimensionsTable}>
                                <div className={s.dimensionsColumn}>
                                    <div className={s.dimensionsName}>Height</div>
                                    <div className={s.dimensionsValue}>{height} cm</div>
                                </div>
                                <div className={s.dimensionsColumn}>
                                    <div className={s.dimensionsName}>Width</div>
                                    <div className={s.dimensionsValue}>{width} cm</div>
                                </div>
                                <div className={s.dimensionsColumn}>
                                    <div className={s.dimensionsName}>Depth</div>
                                    <div className={s.dimensionsValue}>{depth} cm</div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className={s.counter}>
                        <h5 className={s.counterTitle}>Quantity</h5>
                        <Counter qnty={quantity} setQnty={setQuantity} />
                    </div>

                    <div className={s.actions}>
                        <Button className={s.actionsBtn} type={'primary'} onClick={onClickBtn}>
                            Add to cart
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    imgSrc: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    depth: PropTypes.string,
    isBig: PropTypes.string,
    desc: PropTypes.string,
    specs: PropTypes.objectOf(PropTypes.number),
    addToCart: PropTypes.func
};

export default Product;
