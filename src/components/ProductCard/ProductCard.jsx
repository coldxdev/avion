import React from 'react';
import s from "./ProductCard.module.scss";
import PropTypes from "prop-types";
import cn from "classnames";
import {Link} from "react-router-dom";

const ProductCard = ({imgSrc, href, name, price, isBig}) => {

    return (
        <article className={s.product}>
            <Link
                className={cn(s.img, {
                    [s.big]: isBig
                })}
                to={href}>
                <img src={imgSrc} alt={`Image ${name}`}/>
            </Link>

            <h5 className={s.name}> {name} </h5>

            <p className={s.price}> {price} </p>
        </article>
    );
};

ProductCard.propTypes = {
    imgSrc: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    href: PropTypes.string,
    isBig: PropTypes.bool,
}

export default ProductCard;