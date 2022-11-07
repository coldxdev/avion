import React, {useState} from 'react';
import s from './Cart.module.scss';
import CartItem from './CartItem';
import {Button} from '../index';
import {SPACE_BETWEEN_CART_ITEMS} from '../../utils/consts';
import {getMaxHeightCartItem} from '../../utils/functions';
import PropTypes from 'prop-types';
import CartLoader from './CartLoader/CartLoader';
import {BinIcon} from '../../assets/images/icons';
import {useDispatch} from 'react-redux';
import {deleteFromCartAC, emptyCartAC, updateCartAC} from '../../redux/action-creators/cartAC';

const Cart = ({cartItems, subtotal, isCartLoading}) => {

    const dispatch = useDispatch();

    const [cartItemHeight, setCartItemHeight] = useState(0);
    const formatItemHeight = cartItemHeight ? +cartItemHeight.toFixed(2) : 0;

    const deleteFromCart = (id) => {
        dispatch(deleteFromCartAC(id));
    }

    const updateCart = (id, value) => {
        dispatch(updateCartAC(id, value));
    }

    const onEmptyBtn = () => {
        dispatch(emptyCartAC());
    }


    const cartItemElems = cartItems.map(item => (
        <CartItem
            key={item.id}
            setHeight={setCartItemHeight}
            imgSrc={item.image.url}
            permalink={item.permalink}
            name={item.name}
            price={item.price.formatted_with_symbol}
            quantity={item.quantity}
            id={item.id}
            updateCart={updateCart}
            deleteFromCart={deleteFromCart}
        />
    ));


    const isCartHasItems = () => cartItems.length > 0;

    return (
        <div className={s.cart}>
            <div className='container'>
                <div className={s.cartTop}>
                    <h1 className={s.title}>Your shopping cart {isCartHasItems() ? null : 'is empty'}</h1>
                    {isCartHasItems() &&
                        <button onClick={onEmptyBtn}>
                            <BinIcon/>
                        </button>
                    }
                </div>
                {isCartHasItems() ? (
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
                                    maxHeight: getMaxHeightCartItem(formatItemHeight) || 0,
                                }}
                            >
                                {cartItemElems}
                            </div>
                        </div>
                        <div className={s.total}>
                            <div className={s.totalPrice}>
                                Subtotal <span>{subtotal}</span>
                            </div>
                            <p className={s.totalText}>Taxes and shipping are calculated at checkout</p>
                            <Button type={'primary'}> Go to checkout </Button>
                        </div>
                    </div>
                ) : (
                    <p>You haven't added anything to cart yet</p>
                )
                }
            </div>
            <CartLoader visibility={isCartLoading}/>
        </div>
    );
};

Cart.propTypes = {
    cartItems: PropTypes.arrayOf(PropTypes.object),
    subtotal: PropTypes.string,
    isCartLoading: PropTypes.bool,
};

export default Cart;
