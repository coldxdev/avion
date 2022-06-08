import {Swiper, SwiperSlide} from 'swiper/react';
import React from 'react';
import 'swiper/css';
import PropTypes from "prop-types";
import cn from "classnames"
import s from "./ProductSlider.module.scss"
import {Button, Product} from "../index";
import {Autoplay} from "swiper";

const ProductSlider = ({products, title}) => {
    const sliderElems = products.map(p => (
        <SwiperSlide className={cn(s.slide, {[s.bigSlide]: p.isBig})} key={p.id}>
            <Product {...p}  />
        </SwiperSlide>
    ))

    return (
        <div className={s.productSlider}>
            <div className="container">
                <h2 className={s.title}>{title}</h2>
                <Swiper
                    modules={[Autoplay]}
                    className={s.slider}
                    spaceBetween={20}
                    autoplay={true}
                    slidesPerView={'auto'}
                >
                    {sliderElems}
                </Swiper>
                <div className={s.btn}>
                    <Button className={s.btnElem} type={'secondary'}>
                        View collection
                    </Button>
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

