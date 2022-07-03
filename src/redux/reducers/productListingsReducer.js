const INCREMENT_CURRENT_PAGE = "INCREMENT_CURRENT_PAGE";

const initialState = {
    currentPage: 1,
}

const productListingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_CURRENT_PAGE:
            return {...state, currentPage: state.currentPage + 1}

        default:
            return state
    }
}


export const incrementCurrentPage = () => ({type: INCREMENT_CURRENT_PAGE})

export default productListingsReducer;