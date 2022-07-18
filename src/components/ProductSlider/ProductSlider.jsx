import {Swiper, SwiperSlide} from 'swiper/react';
import React from 'react';
import 'swiper/css';
import PropTypes from "prop-types";
import cn from "classnames"
import s from "./ProductSlider.module.scss"
import {Button, ProductCard} from "../index";
import {Autoplay} from "swiper";
import {ATTRIBUTE_IS_BIG} from "../../utils/consts";
import {getProductAttribute} from "../../utils/functions";

const ProductSlider = ({products, title, btnText}) => {
    const sliderElems = products.map(p => (
        <SwiperSlide
            className={cn(s.slide,
                {[s.bigSlide]: getProductAttribute(p.attributes, ATTRIBUTE_IS_BIG) === 'yes'}
            )}
            key={p.id}>
            <ProductCard
                imgSrc={p.image?.url}
                name={p.name}
                price={p.price.formatted_with_symbol}
                href={p.permalink}
                isBig={getProductAttribute(p.attributes, ATTRIBUTE_IS_BIG) === 'yes'}
                key={p.id}
            />
        </SwiperSlide>
    ))

    const sliderSettings = {
        modules: [Autoplay],
        spaceBetween: 20,
        slidesPerView: 'auto',
    }


    return (
        <div className={s.productSlider}>
            <div className="container">
                <h2 className={s.title}>{title}</h2>
                <Swiper
                    className={s.slider}
                    {...sliderSettings}
                >
                    {sliderElems}
                </Swiper>
                <div className={s.btn}>
                    {btnText &&
                        <Button className={s.btnElem} type={'secondary'}>
                            {btnText}
                        </Button>
                    }
                </div>
            </div>
        </div>
    )
};

ProductSlider.propTypes = {
    products: PropTypes.arrayOf(Object),
    title: PropTypes.string,
}

export default ProductSlider;

