import {
	commerce
} from '../../lib/commerce';
import {
	UPDATE_CATEGORIES
} from './actionTypes';
import {
	setIsLoading
} from './appAC';

export const updateCategories = (categories) => ({
	type: UPDATE_CATEGORIES,
	payload: categories
})

export const fetchCategories = () => (
	async (dispatch) => {
		dispatch(setIsLoading(true));
		await commerce.categories.list().then(({
			data
		}) => {
			dispatch(updateCategories(data));
			dispatch(setIsLoading(false));
		})
	}
)
