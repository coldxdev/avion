import { SET_IS_CART_LOADING, UPDATE_CART_ITEMS, UPDATE_CART_TOTAL } from '../action-creators/actionTypes'

const initialState = {
    cartTotal: '',
    cartItems: [],
    isCartLoading: false,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CART_ITEMS:
            return {
                ...state,
                cartItems: action.payload,
            }
        case UPDATE_CART_TOTAL:
            return {
                ...state,
                cartTotal: action.payload,
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
