import {setIsLoading} from "./pageReducer";
import {commerce} from "../../lib/commerce";

const UPDATE_PRODUCT = "UPDATE_PRODUCT";

const initialState = {
    productData: {},
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PRODUCT:
            return {...state, productData: action.payload}

        default:
            return state
    }
}


export const updateProduct = (product) => ({type: UPDATE_PRODUCT, payload: product})

export const fetchProduct = (productID) => {
    return async dispatch => {
        dispatch(setIsLoading(true));
        await commerce.products.retrieve(productID, {type: 'permalink'})
            .then(product => {
                dispatch(updateProduct(product))
                dispatch(setIsLoading(false));
            }).catch((error) => {
                console.log('There was an error fetching the products', error)
            });
    }
}

export default productReducer;