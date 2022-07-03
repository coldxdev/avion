import {commerce} from "./lib/commerce";

export const api = {
    getProductsByCategory(category_id, limit) {
        return commerce.products.list({
            limit: limit,
            category_slug: category_id,
        }).then(response => response.data);
    }
}