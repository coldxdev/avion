import { SET_IS_LOADING, SET_IS_PRODUCT_PENDING, UPDATE_PRODUCTS } from '../action-creators/actionTypes'

const initialState = {
    isLoading: false,
    products: [],
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case UPDATE_PRODUCTS: 
            return {...state, products: action.payload }
        case SET_IS_PRODUCT_PENDING:
            const updatedProducts = state.products.map(p => {
                if(p.id === action.payload.id){
                    return {...p, isPending: action.payload.isPending}
                }
                
                return p;
            })
            return {...state, products: updatedProducts}
        default:
            return state
    }
}




export default appReducer;
