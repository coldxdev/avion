import { SET_IS_LOADING, SET_IS_PRODUCT_PENDING, UPDATE_PRODUCTS } from '../action-creators/actionTypes'

const initialState = {
    loader: {
        isLoading: false,
        stackLength: 0,
    },
    products: [],
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case SET_IS_LOADING:
            const isLoading = action.payload;

            if(isLoading){
                return {...state, loader: {isLoading, stackLength: state.loader.stackLength + 1}}
            }
            
            if(!isLoading && state.loader.stackLength === 1){
                return {...state, loader: {isLoading, stackLength: 0}}
            } else {
                return {...state, loader: {isLoading: true, stackLength: state.loader.stackLength - 1}}
            }
            
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
