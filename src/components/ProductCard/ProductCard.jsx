import React from 'react';
import s from './ProductCard.module.scss';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {Link} from 'react-router-dom';
import ProductMockupImg from '../../assets/images/product-image-mockup.jpg';
import {Button} from '../index';
import {CartIcon, SuccessIcon, LoadingIcon} from '../../assets/images/icons';
import LazyLoad from 'react-lazy-load';

const ProductCard = ({imgSrc, href, name, price, onAdd, isBig, isAdded = false, isPending}) => {
    const getButtonContent = () => {
        if (isPending) {
            return <LoadingIcon/>;
        }
        if (isAdded && !isPending) {
            return <SuccessIcon className={s.successIcon}/>;
        }

        return <CartIcon className={s.btnIcon}/>;
    };

    return (
        <article className={cn(s.product, {
            [s.big]: isBig,
        })}>
            <Link
                className={cn(s.img)}
                to={`/product/${href}`}
            >
                <LazyLoad height={375} offset={300}>
                    <img src={imgSrc ? imgSrc : ProductMockupImg}
                         alt={`Image ${name}`}
                         loading={'lazy'}
                    />
                </LazyLoad>
            </Link>

            <div className={s.wrapper}>
                <div className={s.text}>
                    <h5 className={s.name}> {name} </h5>
                    <p className={s.price}> {price} </p>
                </div>

                <Button
                    className={s.btn}
                    type={'primary'}
                    onClick={onAdd}
                >
                    {getButtonContent()}
                </Button>
            </div>
        </article>
    );
};

ProductCard.propTypes = {
    imgSrc: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    href: PropTypes.string,
    isBig: PropTypes.string,
    isAdded: PropTypes.bool,
    isPending: PropTypes.bool,
    onAdd: PropTypes.func,
};

export default ProductCard;
