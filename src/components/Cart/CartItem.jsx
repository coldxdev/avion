import React, { useCallback, useEffect, useRef, useState } from 'react';
import s from './Cart.module.scss';
import { Counter } from '../index';
import { Link } from 'react-router-dom';
import { debounce } from '../../utils/functions';
import { deleteFromCart, updateCart, fetchCartItems } from '../../redux/action-creators/cartAC';
import { useDispatch } from 'react-redux';
import { CloseIcon } from '../../assets/images/icons';

const CartItem = ({ imgSrc, name, price, setHeight, permalink, quantity, totalPrice, id }) => {
    const [qnty, setQnty] = useState(quantity);

    const dispatch = useDispatch();

    const cartItemRef = useRef(null);

    const handleToResize = () => {
        setHeight(cartItemRef.current?.getBoundingClientRect().height);
    };

    useEffect(() => {
        setHeight(cartItemRef.current?.getBoundingClientRect().height);
        window.addEventListener('resize', debounce(handleToResize, 200));

        return () => {
            window.removeEventListener('resize', debounce(handleToResize, 200));
        };
    }, []);

    const onChangeCounter = value => {
        dispatch(updateCart(id, value));
    };

    const debouncedCounterChange = useCallback(debounce(onChangeCounter, 700), []);

    const setQntyContainer = value => {
        debouncedCounterChange(value);
        return setQnty.call(this, value);
    };

    const onBtnDelete = () => {
        dispatch(deleteFromCart(id));
    };

    const getTotalPrice = (quantity, price) => {
        const formattedPrice = parseFloat(price.slice(1));
        const priceSymbol = price.split('')[0];
        const totalPrice = (quantity * formattedPrice).toFixed(2);
        return priceSymbol + totalPrice;
    };

    return (
        <div className={s.cartItem} ref={cartItemRef}>
            <Link to={'/product/' + permalink} className={s.tableProduct}>
                <div className={s.cartItemWrapper}>
                    <div className={s.cartItemImg}>
                        <img src={imgSrc} alt={`Image ${name}`} />
                    </div>
                    <div className={s.cartItemContent}>
                        <div className={s.cartItemName}>{name}</div>
                        <div className={s.cartItemPrice}>{price}</div>
                    </div>
                </div>
            </Link>
            <div className={s.tableQuantity}>
                <Counter qnty={qnty} setQnty={setQntyContainer} />
            </div>
            <div className={s.tablePrice}>
                <div className={s.cartItemTotalPrice}>{getTotalPrice(qnty, price)}</div>
                <button className={s.btnDelete} onClick={onBtnDelete}>
                    <CloseIcon className={s.btnDeleteIcon} />
                </button>
            </div>
        </div>
    );
};

export default CartItem;
