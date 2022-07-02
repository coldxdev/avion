import {MAX_CART_ITEMS_SHOW, SPACE_BETWEEN_CART_ITEMS} from "./consts";

export function getMaxHeightCartItem(cartItemHeight) {
    return cartItemHeight * MAX_CART_ITEMS_SHOW + (SPACE_BETWEEN_CART_ITEMS * (MAX_CART_ITEMS_SHOW - 1));
}