import {
    ADD_ACTIVE_CATEGORY,
    ADD_ACTIVE_PRICE,
    REMOVE_ACTIVE_CATEGORY,
    REMOVE_ACTIVE_PRICE,
    SET_CHECKBOX_STATE
} from './actionTypes';

export const addActiveCategory = (category) => ({
    type: ADD_ACTIVE_CATEGORY,
    payload: category
});

export const removeActiveCategory = (category) => ({
    type: REMOVE_ACTIVE_CATEGORY,
    payload: category
});

export const addActivePrice = (price) => ({
    type: ADD_ACTIVE_PRICE,
    payload: price
});

export const removeActivePrice = (price) => ({
    type: REMOVE_ACTIVE_PRICE,
    payload: price
});

export const setCheckboxState = (checkboxName, isChecked) => ({
    type: SET_CHECKBOX_STATE,
    payload: {
        checkboxName,
        isChecked
    }
})
