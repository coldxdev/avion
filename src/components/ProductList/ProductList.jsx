import React from 'react';
import s from './ProductList.module.scss';
import { Button, ProductCard } from '../index';
import PropTypes from 'prop-types';
import cn from 'classnames';

//TODO: [] Cделать адекватное отоброжение карточек с большой картинкой

const ProductList = props => {
    const {
        title,
        products,
        btnText,
        itemsPerRow = '4',
        withoutPadding,
        withoutContainer,
        onClickBtn,
        hasNextPage = false,
        href,
        cartItemsId,
        onAddToCart,
    } = props;

    const productElems = products.map(p => (
        <ProductCard
            imgSrc={p.image?.url}
            name={p.name}
            price={p.price.formatted_with_symbol}
            href={p.permalink}
            key={p.id}
            onAdd={onAddToCart(p.id)}
            isAdded={cartItemsId.includes(p.id)}
            isPending={p.isPending}
        />
    ));

    const buttonProps = href ? { tag: 'link', href } : null;

    return (
        <div
            className={cn(s.productList, {
                [s.withoutPadding]: withoutPadding,
            })}
        >
            <div className={cn({ container: !withoutContainer })}>
                {title && <h2 className={s.title}>{title}</h2>}
                {products.length ? (
                    <React.Fragment>
                        <div
                            className={cn(s.grid, {
                                [s.threeItemsPerRow]: itemsPerRow === '3',
                                [s.fourItemsPerRow]: itemsPerRow === '4',
                            })}
                        >
                            {productElems}
                        </div>
                        {btnText && hasNextPage ? (
                            <div className={s.btn}>
                                <Button onClick={onClickBtn} type={'secondary'} {...buttonProps}>
                                    {btnText}
                                </Button>
                            </div>
                        ) : null}
                    </React.Fragment>
                ) : (
                    <p className={s.notFoundText}>Not found products</p>
                )}
            </div>
        </div>
    );
};

ProductList.propTypes = {
    title: PropTypes.string,
    btnText: PropTypes.string,
    href: PropTypes.string,
    products: PropTypes.arrayOf(PropTypes.object),
    itemsPerRow: PropTypes.oneOf(['3', '4']),
    withoutPadding: PropTypes.bool,
    withoutContainer: PropTypes.bool,
    hasNextPage: PropTypes.bool,
    onClickBtn: PropTypes.func,
    cartItemsId: PropTypes.arrayOf(PropTypes.string),
    onAddToCart: PropTypes.func,
};

export default ProductList;
