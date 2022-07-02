import React, {useEffect, useRef} from 'react';
import s from "./Cart.module.scss";
import {Counter} from "../index";

const CartItem = ({imgSrc, name, desc, price, setHeight}) => {
    const cartItemRef = useRef(null);

    let throttled = false;
    const handleToResize = () => {
        if (!throttled) {
            setHeight(cartItemRef.current.clientHeight);
            throttled = true;
            setTimeout(() => {
                throttled = false
            }, 200)
        }
    }


    useEffect(() => {
        setHeight(cartItemRef.current.clientHeight);
        window.addEventListener('resize', handleToResize)

        return () => {
            window.removeEventListener('resize', handleToResize)
        }
    }, [])

    return (
        <div className={s.cartItem} ref={cartItemRef}>
            <div className={s.tableProduct}>
                <div className={s.cartItemWrapper}>
                    <div className={s.cartItemImg}>
                        <img src={imgSrc} alt={`Image ${name}`}/>
                    </div>
                    <div className={s.cartItemContent}>
                        <div className={s.cartItemName}>{name}</div>
                        <div className={s.cartItemDesc}>{desc}</div>
                        <div className={s.cartItemPrice}>{price}</div>

                    </div>
                </div>
            </div>
            <div className={s.tableQuantity}>
                <Counter/>
            </div>
            <div className={s.tablePrice}>
                <div className={s.cartItemPrice}>
                    {price}
                </div>
            </div>
        </div>
    );
};

export default CartItem;