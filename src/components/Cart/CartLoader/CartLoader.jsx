import React from 'react';
import s from './CartLoader.module.scss';
import cn from 'classnames';

const CartLoader = ({ visibility }) => {
    return (
        <div
            className={cn({
                [s.active]: visibility,
            }, s.cartLoader)}
        >
            <div className={s.cartLoaderBody}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default CartLoader;
