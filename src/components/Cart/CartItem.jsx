import React, {useCallback, useEffect, useRef, useState} from 'react';
import s from './Cart.module.scss';
import {Counter} from '../index';
import {Link} from 'react-router-dom';
import {debounce, formatPriceWithSymbol} from '../../utils/functions';
import {CloseIcon} from '../../assets/images/icons';
import PropTypes from "prop-types";

const CartItem = props => {
    const {
        imgSrc,
        name,
        price,
        setHeight,
        permalink,
        quantity,
        id,
        deleteFromCart,
        updateCart,
    } = props;

    const [qnty, setQnty] = useState(quantity);

    const cartItemRef = useRef(null);

    const updateHeight = () => {
        setHeight(cartItemRef.current?.getBoundingClientRect().height);
    };

    useEffect(() => {
        updateHeight();
        window.addEventListener('resize', debounce(updateHeight, 200));

        return () => {
            window.removeEventListener('resize', debounce(updateHeight, 200));
        };
    }, []);

    const onChangeCounter = value => {
        updateCart(id, value)
    };

    const debouncedCounterChange = useCallback(debounce(onChangeCounter, 700), []);


    const setQntyContainer = value => {
        debouncedCounterChange(value);
        setQnty(value)
    };

    const onBtnDelete = () => {
        deleteFromCart(id);
    };

    const {numberFromPrice, priceSymbol} = formatPriceWithSymbol(price);

    const getTotalPrice = () => (quantity * numberFromPrice).toFixed(2)
    const getTotalPriceWithSymbol = () => {
        const totalPrice = getTotalPrice();
        return priceSymbol + totalPrice;
    };

    return (
        <div className={s.cartItem} ref={cartItemRef}>
            <Link to={'/product/' + permalink} className={s.tableProduct}>
                <div className={s.cartItemWrapper}>
                    <div className={s.cartItemImg}>
                        <img src={imgSrc} alt={`Image ${name}`}/>
                    </div>
                    <div className={s.cartItemContent}>
                        <div className={s.cartItemName}>{name}</div>
                        <div className={s.cartItemPrice}>{price}</div>
                    </div>
                </div>
            </Link>
            <div className={s.tableQuantity}>
                <Counter qnty={qnty} setQnty={setQntyContainer}/>
            </div>
            <div className={s.tablePrice}>
                <div className={s.cartItemTotalPrice}>{getTotalPriceWithSymbol()}</div>
                <button className={s.btnDelete} onClick={onBtnDelete}>
                    <CloseIcon className={s.btnDeleteIcon}/>
                </button>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    imgSrc: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    setHeight: PropTypes.func,
    permalink: PropTypes.string,
    quantity: PropTypes.number,
    id: PropTypes.string,
    deleteFromCart: PropTypes.func,
    updateCart: PropTypes.func,
}


export default CartItem;
