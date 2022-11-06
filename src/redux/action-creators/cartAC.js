import {toast} from 'react-toastify';
import {commerce} from '../../lib/commerce';
import {
    SET_IS_CART_LOADING,
    UPDATE_CART_DATA,
} from './actionTypes';
import {setIsProductPending} from './appAC';

export const setIsCartLoading = (isCartLoading) => ({
    type: SET_IS_CART_LOADING,
    payload: isCartLoading
})

export const updateCartData = (cartData) => ({
    type: UPDATE_CART_DATA,
    payload: cartData
})

export const fetchCartItemsAC = () => {
    return async dispatch => {
        dispatch(setIsCartLoading(true))
        await commerce.cart.retrieve().then(cart => {
            const itemsId = cart.line_items.map(item => item.product_id)
            dispatch(updateCartData({
                items: cart.line_items,
                itemsId,
                total: cart.subtotal.formatted_with_symbol
            }))
            dispatch(setIsCartLoading(false))
        }).catch((error) => {
            console.log('There was an error fetching the products', error)
        });
    }
}

export const addToCartAC = (productID, qnty = 1) => {
    return async (dispatch) => {
        dispatch(setIsProductPending(productID, true))
        await commerce.cart.add(productID, qnty)
            .then(({cart}) => {
                const itemsId = cart.line_items.map(item => item.product_id)
                dispatch(updateCartData({
                    items: cart.line_items,
                    itemsId,
                    total: cart.subtotal.formatted_with_symbol
                }))
                dispatch(setIsProductPending(productID, false))
                toast.success("Successfully added to cart 👌");
            })
            .catch(err => toast.error(err));
    }
}

export const updateCartAC = (productID, newQnty) => {

    return async dispatch => {
        dispatch(setIsCartLoading(true));

        const updatedCartQuantity = {
            quantity: newQnty
        }

        commerce.cart.update(productID, updatedCartQuantity)
            .then(({cart}) => {
                const itemsId = cart.line_items.map(item => item.product_id)
                dispatch(updateCartData({
                    items: cart.line_items,
                    itemsId,
                    total: cart.subtotal.formatted_with_symbol
                }))
                dispatch(setIsCartLoading(false));
            })
            .catch(err => toast.error(err));

    }


}
export const deleteFromCartAC = (productID) => {
    return async (dispatch) => {
        dispatch(setIsCartLoading(true));

        await commerce.cart.remove(productID)
            .then(({cart}) => {
                const itemsId = cart.line_items.map(item => item.product_id)
                dispatch(updateCartData({
                    items: cart.line_items,
                    itemsId,
                    total: cart.subtotal.formatted_with_symbol
                }))
                dispatch(setIsCartLoading(false));
                toast.success('Product removed from cart 👌');
            })
            .catch(err => toast.error(err));
    }
}


export const emptyCartAC = () => {
    return async dispatch => {
        dispatch(setIsCartLoading(true));
        commerce.cart.empty()
            .then(({cart}) => {
                const itemsId = cart.line_items.map(item => item.product_id)
                dispatch(updateCartData({
                    items: cart.line_items,
                    itemsId,
                    total: cart.subtotal.formatted_with_symbol
                }))
                dispatch(setIsCartLoading(false));
            })
            .catch(err => toast.error(err));

    }

}