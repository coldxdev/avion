import {
    toast
} from 'react-toastify';
import {
    commerce
} from "../../lib/commerce";

const UPDATE_CART_DATA = "UPDATE_CART_DATA";
const SET_IS_CART_LOADING = "SET_IS_CART_LOADING";


const initialState = {
    cartData: {},
    isCartLoading: false,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CART_DATA:
            return {
                ...state, cartData: action.payload
            }
        case SET_IS_CART_LOADING:
            return {
                ...state, isCartLoading: action.payload
            }
        default:
            return state
    }
}

export const setIsCartLoading = (isCartLoading) => ({
    type: SET_IS_CART_LOADING,
    payload: isCartLoading
})
export const updateCartData = (cartData) => ({
    type: UPDATE_CART_DATA,
    payload: cartData
});

export const fetchCartItems = () => {
    return async dispatch => {
        dispatch(setIsCartLoading(true))
        await commerce.cart.retrieve().then(data => {
            dispatch(updateCartData(data))
            dispatch(setIsCartLoading(false));
        }).catch((error) => {
            console.log('There was an error fetching the products', error)
        });
    }
}

export const addToCart = async (productID, qnty = 1) => {
    const toastState = {
        pending: 'Please wait...',
        success: 'Successfully added to cart 👌',
        error: 'Something went wrong 🤯'
    };

    const response = await toast.promise(commerce.cart.add(productID, qnty), toastState);
}

export const updateCart = (productID, newQnty) => {
    // const toastState = {
    //     pending: 'Please wait...',
    //     success: 'Successfully updated  cart 👌',
    //     error: 'Something went wrong 🤯'
    // };

    return async dispatch => {

        dispatch(setIsCartLoading(true));

        const request = commerce.cart.update(productID, {
            quantity: newQnty
        }).then((res) => {
            dispatch(setIsCartLoading(false));
        });

    }


}

export const deleteFromCart = (productID) => {
    const toastState = {
        pending: 'Please wait...',
        success: 'Successfully removed from cart',
        error: 'Something went wrong 🤯'
    };

    return async dispatch => {

        dispatch(setIsCartLoading(true));

        const request = commerce.cart.remove(productID).then(() => {
            dispatch(setIsCartLoading(false));
        });

        await toast.promise(request, toastState);
    }
}


export default cartReducer;
