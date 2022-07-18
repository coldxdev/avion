import {MAX_CART_ITEMS_SHOW, SPACE_BETWEEN_CART_ITEMS} from "./consts";

export function getMaxHeightCartItem(cartItemHeight) {
    return cartItemHeight * MAX_CART_ITEMS_SHOW + (SPACE_BETWEEN_CART_ITEMS * (MAX_CART_ITEMS_SHOW - 1));
}

export function getProductsByCategories(products, activeCategories) {
    if (activeCategories.length === 0) {
        return products;
    }

    return products.filter(product => {
        if (product.categories.length > 0) {
            let productCategories = [];
            product.categories.forEach(c => {
                productCategories.push(c.slug)
            })
            return productCategories.some(c => activeCategories.includes(c));
        }
    })
}

export function getProductsByPrices(products, prices) {
    if (prices.length === 0) {
        return products;
    }

    const fromPrices = [];
    const toPrices = [];

    prices.forEach(price => {
        const separatedPrice = price.split('-');
        const fromPrice = separatedPrice[0].replace('+', "");
        const toPrice = separatedPrice[1] || 'none';

        if (fromPrice) {
            fromPrices.push(fromPrice);
        }

        if (toPrice) {
            toPrices.push(toPrice);
        }

    })

    return products.filter(product => (
            toPrices.some(price => product.price.raw <= +price || toPrices.includes('none')) &&
            fromPrices.some(price => product.price.raw >= +price)
        )
    )

}


export function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}


export function getProductAttribute(productAttributes, attributeName) {
    if (productAttributes && productAttributes.length > 0) {
        return productAttributes.find(a => a.name === attributeName).value
    }
}

