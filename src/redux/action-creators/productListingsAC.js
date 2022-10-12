import { 
	ADD_ACTIVE_CATEGORY,
	ADD_ACTIVE_PRICE, 
	INCREMENT_CURRENT_PAGE, 
	REMOVE_ACTIVE_CATEGORY, 
	REMOVE_ACTIVE_PRICE, 
	RESET_CURRENT_PAGE, 
	SET_CHECKBOX_STATE 
	} from '../reducers/productListingsReducer';

export const incrementCurrentPage = () => ({type: INCREMENT_CURRENT_PAGE});
export const resetCurrentPage = () => ({type: RESET_CURRENT_PAGE});
export const addActiveCategory = (category) => ({type: ADD_ACTIVE_CATEGORY, payload: category});
export const removeActiveCategory = (category) => ({type: REMOVE_ACTIVE_CATEGORY, payload: category});
export const addActivePrice = (price) => ({type: ADD_ACTIVE_PRICE, payload: price});
export const removeActivePrice = (price) => ({type: REMOVE_ACTIVE_PRICE, payload: price});
export const setCheckboxState = (checkboxName, isChecked) => ({
    type: SET_CHECKBOX_STATE,
    payload: {checkboxName, isChecked}
})
