import React, {useState} from 'react';
import s from './Cart.module.scss';
import CartItem from './CartItem';
import {Button} from '../index';
import {SPACE_BETWEEN_CART_ITEMS} from '../../utils/consts';
import {getMaxHeightCartItem} from '../../utils/functions';
import PropTypes from 'prop-types';
import CartLoader from './CartLoader/CartLoader';

const Cart = ({cartItems = [], subTotal, isCartLoading}) => {
    const [cartItemHeight, setCartItemHeight] = useState(0);

    const cartItemElems = cartItems.map(item => (
        <CartItem
            key={item.id}
            setHeight={setCartItemHeight}
            imgSrc={item.image.url}
            permalink={item.permalink}
            name={item.name}
            price={item.price.formatted_with_symbol}
            totalPrice={item.line_total.formatted_with_symbol}
            quantity={item.quantity}
            id={item.id}
        />
    ));

    return (
        <div className={s.cart}>
            <div className='container'>
                <h1 className={s.title}>Your shopping cart {!cartItems.length && 'is empty'}</h1>
                {cartItems.length > 0 ? (
                    <div className={s.wrapper}>
                        <div className={s.table}>
                            <div className={s.tableHeader}>
                                <div className={s.tableProduct}>
                                    <h5 className={s.tableTitle}>Product</h5>
                                </div>
                                <div className={s.tableQuantity}>
                                    <h5 className={s.tableTitle}>Quantity</h5>
                                </div>
                                <div className={s.tablePrice}>
                                    <h5 className={s.tableTitle}>Total</h5>
                                </div>
                            </div>
                            <div
                                className={s.cartItems}
                                style={{
                                    rowGap: SPACE_BETWEEN_CART_ITEMS + 'px',
                                    maxHeight: getMaxHeightCartItem(cartItemHeight) || 0,
                                }}
                            >
                                {cartItemElems}
                            </div>

                        </div>
                        <div className={s.total}>
                            <div className={s.totalPrice}>
                                Subtotal <span>{subTotal}</span>
                            </div>
                            <p className={s.totalText}>Taxes and shipping are calculated at checkout</p>
                            <Button type={'primary'}> Go to checkout </Button>
                        </div>
                    </div>
                ) : (
                    <p>Add anything to cart</p>
                )}
            </div>
            <CartLoader visibility={isCartLoading}/>
        </div>
    );
};

Cart.propTypes = {
    cartItems: PropTypes.arrayOf(PropTypes.object),
    subTotal: PropTypes.string,
};

export default Cart;
