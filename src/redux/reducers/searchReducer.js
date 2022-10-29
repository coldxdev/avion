import { INCREMENT_CURRENT_PAGE, RESET_CURRENT_PAGE, UPDATE_SEARCH_INPUT } from '../action-creators/actionTypes'

const initialState = {
    currentPage: 1,
    seachInput: "",
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_CURRENT_PAGE:
            return {...state, currentPage: state.currentPage + 1}

        case RESET_CURRENT_PAGE:
            return {...state, currentPage: 1}
            
        case UPDATE_SEARCH_INPUT: 
            return {...state, searchInput: action.payload}

        default:
            return state
    }
}



export default searchReducer;
