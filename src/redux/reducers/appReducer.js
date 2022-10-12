export const SET_IS_LOADING = "SET_IS_LOADING";

const initialState = {
    isLoading: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}




export default appReducer;
