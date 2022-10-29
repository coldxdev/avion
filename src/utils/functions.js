import {
    MAX_CART_ITEMS_SHOW,
    SPACE_BETWEEN_CART_ITEMS,
    URL_SEPARATOR
} from "./consts";

export function getMaxHeightCartItem(cartItemHeight) {
    return cartItemHeight * MAX_CART_ITEMS_SHOW + (SPACE_BETWEEN_CART_ITEMS * (MAX_CART_ITEMS_SHOW - 1));
}

export function debounce(func, delay = 200) {
    let timer;

    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}

export function throttle(func, delay = 100) {
    let isThrottle;

    return function (...args) {
        if (!isThrottle) {
            isThrottle = true;
            func.apply(this, args);
            setTimeout(() => isThrottle = false, delay);
        }
    }
}

export function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

export function getProductsByCategories(products, categories, limitProducts) {
    if (!categories || categories.length === 0) return products;

    let filteredProducts = products.filter(product => {
        if (product.categories.length > 0) {
            let productCategories = [];
            product.categories.forEach(c => {
                productCategories.push(c.slug)
            })
            return productCategories.some(c => categories.includes(c));
        }
    })

    return limitProducts ? filteredProducts.slice(0, limitProducts) : filteredProducts
}

export function getProductsByPrices(products, prices) {
    if (!prices || prices.length === 0) {
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

    return products
        .filter(product => (
            toPrices
            .some(price => product.price.raw <= +price ||
                toPrices.includes('none')) &&
            fromPrices
            .some(price => product.price.raw >= +price)))

}

export function getProductsByName(products, name) {
    if(!name) {
        return products;
    }

    const filteredName = name.trim().toLowerCase();

    return products.filter(product => product.name.toLowerCase().includes(filteredName))
}

export function getProductAttributes(productAttributes, queryAttributes) {
    if (!productAttributes) return null;

    let isArrayAttributes = Array.isArray(queryAttributes);


    if (isArrayAttributes) {
        const obj = {};
        queryAttributes.forEach(attr => {
            const value = productAttributes.find(a => a.name === attr)?.value;

            if (value) {
                obj[attr] = value;
            }
        })
        return obj;
    } else {
        return productAttributes.find(a => a.name === queryAttributes).value;
    }
}


export function getURLParams(URLData, keys) {
    if (!keys.length) return;

    let params = {};

    keys.forEach((key) => {
        if (URLData[key]) {
            params[key] = URLData[key].split(URL_SEPARATOR);
        } else {
            params[key] = [];
        }
    });

    return params;
}
