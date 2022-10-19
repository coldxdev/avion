import React, {useEffect} from 'react';
import {Cart} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {fetchCartItems} from "../redux/action-creators/cartAC";

const CartPage = () => {
    const {cartTotal, cartItems, isCartLoading} = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCartItems());
    }, [])

    return (
            <Cart
                cartItems={cartItems}
                subTotal={cartTotal}
                isCartLoading={isCartLoading}
            />
    );
};

export default CartPage;
