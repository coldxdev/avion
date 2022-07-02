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
        withoutContainer
    } = props;

    const productElems = products.map((p) => (
        <ProductCard
            imgSrc={p.imgSrc}
            name={p.name}
            price={p.price}
            href={p.href}
            isBig={p.isBig}
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
                <div className={cn(s.grid, {
                    [s.threeItemsPerRow]: itemsPerRow === "3",
                    [s.fourItemsPerRow]: itemsPerRow === "4",
                })}>
                    {productElems}
                </div>
                <div className={s.btn}>
                    <Button type={'secondary'}>
                        {btnText}
                    </Button>
                </div>
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
}

export default ProductList;