export const INCREMENT_CURRENT_PAGE = "INCREMENT_CURRENT_PAGE";
export const RESET_CURRENT_PAGE = "RESET_CURRENT_PAGE";
export const ADD_ACTIVE_CATEGORY = "ADD_ACTIVE_CATEGORY";
export const REMOVE_ACTIVE_CATEGORY = "REMOVE_ACTIVE_CATEGORY";
export const ADD_ACTIVE_PRICE = "ADD_ACTIVE_PRICE";
export const REMOVE_ACTIVE_PRICE = "REMOVE_ACTIVE_PRICE"
export const SET_CHECKBOX_STATE = "SET_CHECKBOX_STATE";

const initialState = {
    currentPage: 1,
    activeCategories: [],
    activePrices: [],
    checkboxesState: {
        "0-100": {
            checked: false,
            type: "price",
        },
        "101-250": {
            checked: false,
            type: "price",
        },
        "250+": {
            checked: false,
            type: "price",
        },
        "furniture": {
            checked: false,
            type: "category",
        },
        "homeware": {
            checked: false,
            type: "category",
        },
        "sofas": {
            checked: false,
            type: "category",
        },
        "light-fittings": {
            checked: false,
            type: "category",
        },
        "robert-smith": {
            checked: false,
            type: "category",
        },
        "liam-gallagher": {
            checked: false,
            type: "category",
        },
        "biggie-smalls": {
            checked: false,
            type: "category",
        },
        "thom-yorke": {
            checked: false,
            type: "category",
        },
    }
}

const productListingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_CURRENT_PAGE:
            return {...state, currentPage: state.currentPage + 1}

        case RESET_CURRENT_PAGE:
            return {...state, currentPage: 1}

        case ADD_ACTIVE_CATEGORY:
            return {...state, activeCategories: [...state.activeCategories, action.payload]}

        case REMOVE_ACTIVE_CATEGORY:
            const filteredActiveCategories = state.activeCategories.filter(category => category !== action.payload)
            return {...state, activeCategories: filteredActiveCategories}

        case ADD_ACTIVE_PRICE:
            return {...state, activePrices: [...state.activePrices, action.payload]}

        case REMOVE_ACTIVE_PRICE:
            const filteredActivePrices = state.activePrices.filter(price => price !== action.payload)
            return {...state, activePrices: filteredActivePrices}

        case SET_CHECKBOX_STATE:
            const checkboxState = {
                ...state.checkboxesState[action.payload.checkboxName],
                checked: action.payload.isChecked
            };
            return {...state, checkboxesState: {...state.checkboxesState, [action.payload.checkboxName]: checkboxState}}
        default:
            return state
    }
}



export default productListingsReducer;
