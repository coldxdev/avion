import React from 'react';
import s from "./ProductList.module.scss"
import {Button, Product} from "../index";

const ProductList = ({title, products}) => {
    const productElems = products.map((p) => (
        <Product
            imgSrc={p.imgSrc}
            name={p.name}
            price={p.price}
            href={p.href}
            isBig={p.isBig}
            key={p.id}
        />
    ))

    return (
        <div className={s.productList}>
            <div className="container">
                <h2 className={s.title}>
                    {title}
                </h2>
                <div className={s.grid}>
                    {productElems}
                </div>
                <div className={s.btn}>
                    <Button type={'secondary'}>
                        View collection
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductList;