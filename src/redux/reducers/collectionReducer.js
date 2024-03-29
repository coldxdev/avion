import { INCREMENT_CURRENT_PAGE, RESET_CURRENT_PAGE, UPDATE_CATEGORIES } from '../action-creators/actionTypes'

const initialState = {
    currentPage: 1,
    categories: [],
}

const collectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_CURRENT_PAGE:
            return {...state, currentPage: state.currentPage + 1}

        case RESET_CURRENT_PAGE:
            return {...state, currentPage: 1}
            
        case UPDATE_CATEGORIES: 
            return {...state, categories: action.payload}

        default:
            return state
    }
}



export default collectionReducer;
