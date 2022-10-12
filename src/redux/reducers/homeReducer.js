export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS"

const initialState = {
    products: [],
    newProducts: [],
    popularProducts: [],
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PRODUCTS:
            return {
                ...state, products: action.payload
            }

            default:
                return state
    }
}


export default homeReducer;
