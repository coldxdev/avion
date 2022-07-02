import React from 'react';
import s from "./Product.module.scss"
import PropTypes from "prop-types";
import {Button, Counter} from "../index";

const Product = ({product}) => {
    return (
        <div className={s.product}>
            <div className={`container ${s.wrapper}`}>
                <div className={s.img}>
                    <img src={product.imgSrc} alt={`Image ${product.name}`}/>
                </div>
                <div className={s.content}>
                    <div className={s.top}>
                        <h1 className={s.name}>{product.name}</h1>
                        <p className={s.price}>{product.price}</p>
                    </div>
                    <div className={s.desc}>
                        <h5 className={s.descTitle}>Product description</h5>
                        <p>{product.desc}</p>
                    </div>

                    <div className={s.dimensions}>
                        <h5 className={s.dimensionsTitle}>Dimensions</h5>

                        <div className={s.dimensionsTable}>
                            <div className={s.dimensionsColumn}>
                                <div className={s.dimensionsName}>Height</div>
                                <div className={s.dimensionsValue}>{product.specs.height}cm</div>
                            </div>
                            <div className={s.dimensionsColumn}>
                                <div className={s.dimensionsName}>Width</div>
                                <div className={s.dimensionsValue}>{product.specs.width}cm</div>
                            </div>
                            <div className={s.dimensionsColumn}>
                                <div className={s.dimensionsName}>Depth</div>
                                <div className={s.dimensionsValue}>{product.specs.depth}cm</div>
                            </div>
                        </div>

                    </div>

                    <div className={s.counter}>
                        <h5 className={s.counterTitle}>Quantitity</h5>
                        <Counter/>
                    </div>

                    <div className={s.actions}>
                        <Button className={s.actionsBtn} tag={'link'} to={'/'}  type={'primary'}>Add to cart</Button>
                        <Button className={s.actionsBtn} >Save to favorites</Button>
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