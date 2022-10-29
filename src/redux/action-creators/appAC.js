import { commerce } from '../../lib/commerce';
import { INCREMENT_CURRENT_PAGE, RESET_CURRENT_PAGE, SET_IS_LOADING, SET_IS_PRODUCT_PENDING, UPDATE_PRODUCTS } from './actionTypes';

export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, payload: isLoading})

export const updateProducts = (products) => ({type: UPDATE_PRODUCTS, payload: products})

export const fetchProducts = () => (
    async (dispatch) => {
        dispatch(setIsLoading(true));
        await commerce.products.list().then(({data: products}) => {
            const formattedProducts = products.map(p => {
                return {...p, isPending: false}
            })
            dispatch(updateProducts(formattedProducts))
            dispatch(setIsLoading(false));
        }).catch((error) => {
            console.log('There was an error fetching the products', error)
        });
    }
)

export const setIsProductPending = (id, isPending) => (
    {
        type: SET_IS_PRODUCT_PENDING, 
        payload: {id, isPending}
    }
)


export const incrementCurrentPage = () => ({type: INCREMENT_CURRENT_PAGE});

export const resetCurrentPage = () => ({type: RESET_CURRENT_PAGE});
