import React from 'react';
import s from "./Product.module.scss"
import PropTypes from "prop-types";
import {Button, Counter} from "../index";
import {getProductAttribute} from "../../utils/functions";

const Product = ({imgSrc, name, price, description, attributes}) => {
    const productHeight = getProductAttribute(attributes, "height");
    const productWidth = getProductAttribute(attributes, "width");
    const productDepth = getProductAttribute(attributes, "depth");

    return (
        <div className={s.product}>
            <div className={`container ${s.wrapper}`}>
                <div className={s.img}>
                    <img src={imgSrc} alt={`Image ${name}`}/>
                </div>
                <div className={s.content}>
                    <div className={s.top}>
                        <h1 className={s.name}>{name}</h1>
                        <p className={s.price}>{price}</p>
                    </div>
                    <div className={s.desc}>
                        <h5 className={s.descTitle}>Product description</h5>
                        <div className='commerceEditor' dangerouslySetInnerHTML={{__html: description}}/>
                    </div>

                    {productHeight > 0 && <div className={s.dimensions}>
                        <h5 className={s.dimensionsTitle}>Dimensions</h5>

                        <div className={s.dimensionsTable}>
                            <div className={s.dimensionsColumn}>
                                <div className={s.dimensionsName}>Height</div>
                                <div className={s.dimensionsValue}>{productHeight} cm</div>
                            </div>
                            <div className={s.dimensionsColumn}>
                                <div className={s.dimensionsName}>Width</div>
                                <div className={s.dimensionsValue}>{productWidth} cm</div>
                            </div>
                            <div className={s.dimensionsColumn}>
                                <div className={s.dimensionsName}>Depth</div>
                                <div className={s.dimensionsValue}>{productDepth} cm</div>
                            </div>
                        </div>

                    </div>}

                    <div className={s.counter}>
                        <h5 className={s.counterTitle}>Quantitity</h5>
                        <Counter/>
                    </div>

                    <div className={s.actions}>
                        <Button className={s.actionsBtn} tag={'link'} to={'/'} type={'primary'}>Add to cart</Button>
                        <Button className={s.actionsBtn}>Save to favorites</Button>
                    </div>

                </div>
            </div>
        </div>
    );
};

Product.propType = {
    imgSrc: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    desc: PropTypes.string,
    specs: PropTypes.objectOf(PropTypes.number),
}

export default Product;