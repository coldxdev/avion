import { commerce } from '../../lib/commerce';
import { UPDATE_PRODUCTS } from '../reducers/homeReducer';
import { setIsLoading } from './appAC';


export const updateProducts = (products) => ({type: UPDATE_PRODUCTS, payload: products})

export const fetchProducts = () => (
    async (dispatch, getStore) => {
        dispatch(setIsLoading(true));
        await commerce.products.list().then(({data: products}) => {
            dispatch(updateProducts(products))
            dispatch(setIsLoading(false));
        }).catch((error) => {
            console.log('There was an error fetching the products', error)
        });
    }
)
