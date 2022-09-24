import React from 'react';
import s from "./ProductCard.module.scss";
import PropTypes from "prop-types";
import cn from "classnames";
import {Link} from "react-router-dom";
import ProductMockupImg from "../../assets/images/product-image-mockup.jpg";
import {Button} from "../index";
import {CartIcon, SuccessIcon} from "../../assets/images/icons";

// TODO: Сделать внутри кнопки лоадер после добавления в корзину
// TODO: Проверять находиться ли элемент в корзине и менять иконку в кнопке

const ProductCard = ({imgSrc, href, name, price, isBig, onAdd, isAdded = false}) => {
    return (
        <article className={s.product}>
            <Link
                className={cn(s.img, {
                    [s.big]: isBig
                })}
                to={`../product/${href}`}>
                <img src={imgSrc ? imgSrc : ProductMockupImg} alt={`Image ${name}`} loading={'lazy'}/>
            </Link>


            <div className={s.wrapper}>

                <div className={s.text}>
                    <h5 className={s.name}> {name} </h5>
                    <p className={s.price}> {price} </p>
                </div>


                <Button className={s.btn} type={'primary'} onClick={onAdd}>
                    {isAdded ? <SuccessIcon className={s.successIcon} /> : <CartIcon className={s.btnIcon}/>}
                </Button>

            </div>


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