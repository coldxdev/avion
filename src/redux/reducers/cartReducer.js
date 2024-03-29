import {
    SET_IS_CART_LOADING,
    UPDATE_CART_DATA,
} from '../action-creators/actionTypes'

const initialState = {
    subtotal: '',
    totalCartItems: 0,
    cartItems: [],
    cartItemsId: [],
    isCartLoading: false,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CART_DATA:
            return {
                ...state,
                cartItems: action.payload.items,
                totalCartItems: action.payload.totalCartItems,
                subtotal: action.payload.subtotal,
                cartItemsId: action.payload.itemsId,
            }
        case SET_IS_CART_LOADING:
            return {
                ...state, isCartLoading: action.payload
            }
        default:
            return state
    }
}


export default cartReducer;
