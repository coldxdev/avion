import React, { useState } from 'react';
import s from './Product.module.scss';
import PropTypes from 'prop-types';
import { Button, Counter } from '../index';
import { getProductAttributes } from '../../utils/functions';
import { ATTRIBUTE_DEPTH, ATTRIBUTE_HEIGHT, ATTRIBUTE_IS_BIG, ATTRIBUTE_WIDTH } from '../../utils/consts';
import cn from 'classnames';
import { addToCart } from '../../redux/reducers/cartReducer';

const requiredAttributes = [ATTRIBUTE_DEPTH, ATTRIBUTE_WIDTH, ATTRIBUTE_HEIGHT, ATTRIBUTE_IS_BIG];

const Product = ({ imgSrc, name, price, description, productAttributes, id }) => {
    const { width, height, depth, is_big } = getProductAttributes(productAttributes, requiredAttributes);

    const [quantity, setQuantity] = useState(1);

    const onClickBtn = async () => {
        if (quantity < 1) {
            return;
        }
        await addToCart(id, quantity);
    };

    return (
        <div
            className={cn(s.product, {
                [s.isBig]: is_big === 'true',
            })}
        >
            <div className={`container ${s.wrapper}`}>
                <div className={s.img}>
                    <img src={imgSrc} loading={'lazy'} alt={`Image ${name}`} />
                </div>
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
    desc: PropTypes.string,
    specs: PropTypes.objectOf(PropTypes.number),
};

export default Product;
