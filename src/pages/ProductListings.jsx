import React from 'react';
import {ProductList, ProductsAside} from "../components";
import {productsListings} from "../utils/mockup";

const ProductListings = () => {
    return (
        <div className="container productListings">
            <ProductsAside/>
            <ProductList
                products={productsListings}
                btnText={'Load more'}
                itemsPerRow={"3"}
                withoutPadding={true}
                withoutContainer={true}
            />
        </div>
    );
};

export default ProductListings;