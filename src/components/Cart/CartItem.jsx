import React, {useCallback, useEffect, useRef, useState} from 'react';
import s from './Cart.module.scss';
import {Counter} from '../index';
import {Link} from 'react-router-dom';
import {debounce, throttle} from '../../utils/functions';
import {deleteFromCart, updateCart, fetchCartItems} from '../../redux/reducers/cartReducer';
import {useDispatch} from 'react-redux';
import {CloseIcon} from "../../assets/images/icons";

//TODO: Сделать отдельный лоадер для корзины

const CartItem = ({imgSrc, name, price, setHeight, permalink, quantity, totalPrice, id}) => {
    const [qnty, setQnty] = useState(quantity);

    const dispatch = useDispatch();

    const cartItemRef = useRef(null);

    const handleToResize = () => {
        setHeight(cartItemRef?.current?.clientHeight);
    };

    useEffect(() => {
        setHeight(cartItemRef.current.clientHeight);
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

        setTimeout(() => {
            dispatch(fetchCartItems());
        }, 100)
    };

    const debouncedCounterChange = useCallback(debounce(onChangeCounter, 700), []);

    const setQntyContainer = value => {
        debouncedCounterChange(value);
        return setQnty.call(this, value);
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
                <div className={s.cartItemPrice}>{totalPrice}</div>
                <button className={s.btnDelete}><CloseIcon/></button>
            </div>
        </div>
    );
};

export default CartItem;
