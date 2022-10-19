import { commerce } from '../../lib/commerce';
import { UPDATE_PRODUCT } from './actionTypes';
import { setIsLoading } from './appAC';

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
