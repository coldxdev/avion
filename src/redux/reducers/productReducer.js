export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

const initialState = {
    productData: {},
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PRODUCT:
            return {
                ...state, productData: action.payload
            }

            default:
                return state
    }
}




export default productReducer;
