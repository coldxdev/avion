import {setIsLoading} from "./pageReducer";
import {commerce} from "../../lib/commerce";

const FETCH_PRODUCTS = "FETCH_PRODUCTS";
const UPDATE_PRODUCTS = "UPDATE_PRODUCTS"

const initialState = {
    products: [],
    newProducts: [],
    popularProducts: [],
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PRODUCTS:
            return {...state, products: action.payload}

        default:
            return state
    }
}


export const updateProducts = (products) => ({type: UPDATE_PRODUCTS, payload: products})

export const fetchProducts = () => {
    return async (dispatch, getStore) => {
        dispatch(setIsLoading(true));
        await commerce.products.list().then(({data: products}) => {
            dispatch(updateProducts(products))
            dispatch(setIsLoading(false));
        }).catch((error) => {
            console.log('There was an error fetching the products', error)
        });
    }
}

export default homeReducer;