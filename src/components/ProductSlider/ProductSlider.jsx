import {Swiper, SwiperSlide} from 'swiper/react';
import React from 'react';
import 'swiper/css';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './ProductSlider.module.scss';
import {Button, ProductCard} from '../index';
import {Autoplay} from 'swiper';
import {ATTRIBUTE_IS_BIG} from '../../utils/consts';
import {getProductAttributes} from '../../utils/functions';

const sliderSettings = {
    modules: [Autoplay],
    spaceBetween: 20,
    slidesPerView: 'auto',
};

const ProductSlider = ({products, title, btnText, href, addToCart, cartItemsId}) => {
    const sortedProducts = [...products].sort((a, b) => {
        const isBigProductA = Boolean(getProductAttributes(a.attributes, ATTRIBUTE_IS_BIG));
        const isBigProductB = Boolean(getProductAttributes(b.attributes, ATTRIBUTE_IS_BIG));
        return Number(isBigProductB) - Number(isBigProductA)
    })

    const sliderElems = sortedProducts.map(p => {
        const isBigProduct = getProductAttributes(p.attributes, ATTRIBUTE_IS_BIG);

        const onAdd = () => {
            addToCart(p.id)
        }

        return (
            <SwiperSlide
                className={cn(s.slide, {
                    [s.bigSlide]: isBigProduct,
                })}
                key={p.id}
            >
                <ProductCard
                    imgSrc={p.image?.url}
                    name={p.name}
                    price={p.price.formatted_with_symbol}
                    href={p.permalink}
                    isBig={isBigProduct}
                    key={p.id}
                    onAdd={onAdd}
                    isAdded={cartItemsId.includes(p.id)}
                    isPending={p.isPending}
                />
            </SwiperSlide>
        );
    });

    return (
        <div className={s.productSlider}>
            <div className='container'>
                <h2 className={s.title}>{title}</h2>
                <Swiper className={s.slider} {...sliderSettings}>
                    {sliderElems}
                </Swiper>
                <div className={s.btn}>
                    {btnText && (
                        <Button
                            className={s.btnElem}
                            type={'secondary'}
                            tag={'link'}
                            href={href}
                        >
                            {btnText}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

ProductSlider.propTypes = {
    products: PropTypes.arrayOf(Object),
    title: PropTypes.string,
    addToCart: PropTypes.func
};

export default ProductSlider;
