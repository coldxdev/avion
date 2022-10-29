import {
	UPDATE_SEARCH_INPUT
} from './actionTypes';

export const updateSearchInput = (searchInput) => ({
	type: UPDATE_SEARCH_INPUT,
	payload: searchInput
});
