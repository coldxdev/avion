import {AMOUNT_PRODUCTS_ON_PAGE, MAX_CART_ITEMS_SHOW, NEW_PRODUCTS_CATEGORY, SPACE_BETWEEN_CART_ITEMS} from "./consts";

export function getMaxHeightCartItem(cartItemHeight) {
    return cartItemHeight * MAX_CART_ITEMS_SHOW + (SPACE_BETWEEN_CART_ITEMS * (MAX_CART_ITEMS_SHOW - 1));
}

export function filterProductsByCategories(products, categoryName) {
    return products.filter(product => {
        if (product.categories.length > 0) {
            let arr = [];
            product.categories.forEach(c => arr.push(...Object.values(c)))
            return arr.includes(categoryName);
        }
    })
}

export function getProductAttribute(product, attributeName) {
    return product.attributes.find(a => a.name === attributeName);
}
