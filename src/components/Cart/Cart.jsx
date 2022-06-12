import React from 'react';
import s from './Cart.module.scss'
import CartItem from "./CartItem";
import {Button} from "../index";

const Cart = ({cartItems}) => {
    const cartItemElems = cartItems.map(item => <CartItem key={item.id} {...item} />)

    return (
        <div className={s.cart}>
            <div className="container">
                <h1 className={s.title}>
                    Your shopping cart
                </h1>
                <div className={s.table}>
                    <div className={s.tableHeader}>
                        <div className={s.tableProduct}>
                            <h5 className={s.tableTitle}>
                                Product
                            </h5>
                        </div>
                        <div className={s.tableQuantity}>
                            <h5 className={s.tableTitle}>
                                Quantity
                            </h5>
                        </div>
                        <div className={s.tablePrice}>
                            <h5 className={s.tableTitle}>
                                Total
                            </h5>
                        </div>
                    </div>
                    <div className={s.cartItems}>
                        {cartItemElems}
                    </div>
                </div>
                <div className={s.total}>
                    <div className={s.totalPrice}>
                        Subtotal <span>£210</span>
                    </div>
                    <p className={s.totalText}>
                        Taxes and shipping are calculated at checkout
                    </p>
                    <Button type={'primary'}> Go to checkout </Button>
                </div>
            </div>
        </div>
    );
};

export default Cart;