import { INCREMENT_CURRENT_PAGE, RESET_CURRENT_PAGE } from '../reducers/collectionReducer';

export const incrementCurrentPage = () => ({type: INCREMENT_CURRENT_PAGE});
export const resetCurrentPage = () => ({type: RESET_CURRENT_PAGE});
