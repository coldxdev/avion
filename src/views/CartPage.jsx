import React, {useEffect} from 'react';
import {Cart} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {fetchCartItems} from "../redux/reducers/cartReducer";
import {cartItems} from "../utils/mockup";
import {isEmpty} from "../utils/functions";

const CartPage = () => {
    const {cartData, isCartLoading} = useSelector(state => state.cart);
    const dispatch = useDispatch();

    // TODO: Решить проблему с загрузкой элементов после рендера

    useEffect(() => {
        dispatch(fetchCartItems());
    }, [])

    return (
            <Cart
                cartItems={cartData?.line_items}
                subTotal={cartData?.subtotal?.formatted_with_symbol}
                isCartLoading={isCartLoading}
            />
    );
};

export default CartPage;
