import React from 'react';
import {Cart} from "../components";
import {cartItems} from "../utils/mockup";

const CartPage = () => {
    return (
        <>
            <Cart cartItems={cartItems} />
        </>
    );
};

export default CartPage;