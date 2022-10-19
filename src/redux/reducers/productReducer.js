import { UPDATE_PRODUCT } from "../action-creators/actionTypes"

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
