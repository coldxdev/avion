import { toast } from 'react-toastify';
import { commerce } from '../../lib/commerce';
import {
    SET_IS_CART_LOADING,
    UPDATE_CART_ITEMS,
    UPDATE_CART_TOTAL
} from '../reducers/cartReducer';

export const setIsCartLoading = (isCartLoading) => ({
    type: SET_IS_CART_LOADING,
    payload: isCartLoading
})
export const updateCartItems = (cartItems) => ({
    type: UPDATE_CART_ITEMS,
    payload: cartItems
});
export const updateCartTotal = (cartTotal) => ({
    type: UPDATE_CART_TOTAL,
    payload: cartTotal
});


export const fetchCartItems = () => {
    return async dispatch => {
        dispatch(setIsCartLoading(true))
        await commerce.cart.retrieve().then(data => {
            dispatch(updateCartItems(data.line_items))
            dispatch(updateCartTotal(data.subtotal.formatted_with_symbol))
            dispatch(setIsCartLoading(false))
        }).catch((error) => {
            console.log('There was an error fetching the products', error)
        });
    }
}

export const addToCart = (productID, qnty = 1) => {
    return async dispatch => {
        await commerce.cart.add(productID, qnty)
            .then(res => {
                dispatch(fetchCartItems())
                toast.success("Successfully added to cart 👌");
            })
            .catch(err => toast.error(err));
    }


}

export const updateCart = (productID, newQnty) => {

    return async dispatch => {
        dispatch(setIsCartLoading(true));

        const updatedCartQuantity = {
            quantity: newQnty
        }

        commerce.cart.update(productID, updatedCartQuantity)
            .then((res) => {
                dispatch(setIsCartLoading(false));
            })
            .catch(err => toast.error(err));

    }


}
export const deleteFromCart = (productID) => {
    return async (dispatch, getStore) => {
        dispatch(setIsCartLoading(true));
        
        const {cart} = getStore();
        
        const filteredCartItems = cart.cartItems.filter(item => item.id !== productID)

        await commerce.cart.remove(productID)
            .then((res) => {
                dispatch(updateCartItems(filteredCartItems))
                dispatch(setIsCartLoading(false));
                toast.success( 'Product removed from cart 👌');
            })
            .catch(err => toast.error(err));
    }
}
