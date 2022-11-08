import {
    ADD_ACTIVE_CATEGORY,
    ADD_ACTIVE_PRICE,
    INCREMENT_CURRENT_PAGE,
    REMOVE_ACTIVE_CATEGORY,
    REMOVE_ACTIVE_PRICE,
    RESET_CURRENT_PAGE,
    SET_CHECKBOX_STATE
} from '../action-creators/actionTypes'

const initialState = {
    currentPage: 1,
    activeCategories: [],
    activePrices: [],
    checkboxesState: [
        {
            title: "0-100",
            checked: false,
            name: "0-100",
            type: "price",
        },
        {
            title: "101-250",
            checked: false,
            name: "101-250",
            type: "price",
        },
        {
            title: "250+",
            checked: false,
            name: "250+",
            type: "price",
        },
        {
            title: "Furniture",
            checked: false,
            name: "furniture",
            type: "category",
        },
        {
            title: "Homeware",
            checked: false,
            name: "homeware",
            type: "category",
        },
        {
            title: "Sofas",
            checked: false,
            name: "sofas",
            type: "category",
        },
        {
            title: "Light Fittings",
            checked: false,
            name: "light-fittings",
            type: "category",
        },
        {
            title: "Robert Smith",
            checked: false,
            name: "robert-smith",
            type: "category",
        },
        {
            title: "Liam Gallagher",
            checked: false,
            name: "liam-gallagher",
            type: "category",
        },
        {
            title: "Biggie Smalls",
            checked: false,
            name: "biggie-smalls",
            type: "category",
        },
        {
            title: "Thom Yorke",
            checked: false,
            name: "thom-yorke",
            type: "category",
        },
    ]
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
            const currentCheckboxIndex = state.checkboxesState.findIndex(checkbox => checkbox.name === action.payload.checkboxName)

            const updatedCheckboxesState = [
                ...state.checkboxesState.slice(0, currentCheckboxIndex),
                {
                    ...state.checkboxesState[currentCheckboxIndex],
                    checked: action.payload.isChecked
                },
                    ...state.checkboxesState.slice(currentCheckboxIndex + 1)
            ]


            return {
                ...state, checkboxesState: updatedCheckboxesState
            }
        default:
            return state
    }
}


export default productListingsReducer;
