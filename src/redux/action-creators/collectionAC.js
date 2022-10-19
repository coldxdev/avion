import { commerce } from '../../lib/commerce';
import { INCREMENT_CURRENT_PAGE, RESET_CURRENT_PAGE, UPDATE_COLLECTION_DATA } from './actionTypes';
import { setIsLoading } from './appAC';

export const incrementCurrentPage = () => ({type: INCREMENT_CURRENT_PAGE});
export const resetCurrentPage = () => ({type: RESET_CURRENT_PAGE});
export const updateCollectionData = (collectionData) => ({type: UPDATE_COLLECTION_DATA, payload: collectionData})
export const fetchCollectionData = (categoryID) => {
	return async (dispatch) => {
		dispatch(setIsLoading(true))
		await commerce.categories.retrieve(categoryID).then(res => dispatch(updateCollectionData(res)))
		dispatch(setIsLoading(false));
	}
}
