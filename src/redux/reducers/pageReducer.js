import {commerce} from "../../lib/commerce";
import {toast} from "react-toastify";

const SET_IS_LOADING = "SET_IS_LOADING";

const initialState = {
    isLoading: false,
}

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}


export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, payload: isLoading})

export default pageReducer;
