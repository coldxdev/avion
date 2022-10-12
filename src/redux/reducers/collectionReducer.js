export const INCREMENT_CURRENT_PAGE = "INCREMENT_CURRENT_PAGE";
export const RESET_CURRENT_PAGE = "RESET_CURRENT_PAGE";

const initialState = {
    currentPage: 1,
}

const collectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_CURRENT_PAGE:
            return {...state, currentPage: state.currentPage + 1}

        case RESET_CURRENT_PAGE:
            return {...state, currentPage: 1}
        default:
            return state
    }
}



export default collectionReducer;
