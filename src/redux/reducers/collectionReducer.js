export const INCREMENT_CURRENT_PAGE = "INCREMENT_CURRENT_PAGE";
export const RESET_CURRENT_PAGE = "RESET_CURRENT_PAGE";
export const UPDATE_COLLECTION_DATA = "UPDATE_COLLECTION_DATA";

const initialState = {
    currentPage: 1,
    data: {},
}

const collectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_CURRENT_PAGE:
            return {...state, currentPage: state.currentPage + 1}

        case RESET_CURRENT_PAGE:
            return {...state, currentPage: 1}
            
        case UPDATE_COLLECTION_DATA: 
            return {...state, data: action.payload}

        default:
            return state
    }
}



export default collectionReducer;
