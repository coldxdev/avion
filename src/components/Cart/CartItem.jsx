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
    // const cartItemHeight = cartItemRef?.current?.getBoundingClientRect().height;
    // const cartItemFormattedHeight = +cartItemHeight?.toFixed(2);

    const handleToResize = () => {
        console.log(+cartItemRef?.current?.getBoundingClientRect().height.toFixed(2));
        setHeight(+cartItemRef?.current?.getBoundingClientRect().height.toFixed(2));
    };

    useEffect(() => {
        setHeight(+cartItemRef?.current?.getBoundingClientRect().height.toFixed(2));
    }, [ cartItemRef.current]);

    useEffect(() => {
        window.addEventListener('resize', debounce(handleToResize, 200));

        return () => {
            window.removeEventListener('resize', debounce(handleToResize, 200));
        };
    }, []);

    const onChangeCounter = value => {
        if (value > 0) {
            dispatch(updateCart(id, value));
        } else {
            dispatch(deleteFromCart(id));
        }

        dispatch(fetchCartItems());
    };

    const debouncedCounterChange = useCallback(debounce(onChangeCounter, 700), []);

    const setQntyContainer = value => {
        debouncedCounterChange(value);
        return setQnty.call(this, value);
    };

    const onBtnDelete = () => {
        dispatch(deleteFromCart(id));
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
                <div className={s.cartItemTotalPrice}>{totalPrice}</div>
                <button className={s.btnDelete} onClick={onBtnDelete}>
                    <CloseIcon className={s.btnDeleteIcon} />
                </button>
            </div>
        </div>
    );
};

export default CartItem;
