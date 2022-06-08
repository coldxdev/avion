import React from 'react';
import s from "./Product.module.scss";
import PropTypes from "prop-types";
import cn from "classnames";

const Product = ({imgSrc, href, name, price, isBig}) => {

    return (
        <article className={s.product}>
            <a
                className={cn(s.img, {
                    [s.big]: isBig
                })}
                href={href}>
                <img src={imgSrc} alt={`Image ${name}`}/>
            </a>

            <h5 className={s.name}> {name} </h5>

            <p className={s.price}> {price} </p>
        </article>
    );
};

Product.propTypes = {
    imgSrc: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    href: PropTypes.string,
    isBig: PropTypes.bool,
}

export default Product;