import React from 'react';
import s from "./ProductList.module.scss"
import {Button, ProductCard} from "../index";
import PropTypes from "prop-types";
import cn from "classnames";

const ProductList = (props) => {
    const {
        title,
        products,
        btnText = "View collection",
        itemsPerRow = "4",
        withoutPadding,
        withoutContainer,
        onClickBtn,
        hasNextPage
    } = props;

    const productElems = products.map((p) => (
        <ProductCard
            imgSrc={p.image?.url}
            name={p.name}
            price={p.price.formatted_with_symbol}
            href={p.permalink}
            key={p.id}
        />
    ))

    return (
        <div className={cn(s.productList, {
            [s.withoutPadding]: withoutPadding,
        })}>
            <div className={withoutContainer ? null : 'container'}>
                {title &&
                    <h2 className={s.title}>
                        {title}
                    </h2>
                }
                {products.length > 0
                    ? <>
                        <div className={cn(s.grid, {
                            [s.threeItemsPerRow]: itemsPerRow === "3",
                            [s.fourItemsPerRow]: itemsPerRow === "4",
                        })}>
                            {productElems}
                        </div>
                        <div className={s.btn}>
                            {hasNextPage && <Button onClick={onClickBtn} type={'secondary'}>
                                {btnText}
                            </Button>}
                        </div>
                    </>
                    : <p className={s.notFoundText}>
                        Not found products
                    </p>
                }
            </div>
        </div>
    );
};

ProductList.propTypes = {
    title: PropTypes.string,
    products: PropTypes.arrayOf(PropTypes.object),
    btnText: PropTypes.string,
    itemsPerRow: PropTypes.oneOf(["3", "4"]),
    withoutPadding: PropTypes.bool,
    withoutContainer: PropTypes.bool,
    hasNextPage: PropTypes.bool,
}

export default ProductList;