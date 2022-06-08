import {Swiper, SwiperSlide} from 'swiper/react';
import React from 'react';
import 'swiper/css';
import PropTypes from "prop-types";
import s from "./ProductSlider.module.scss"

const ProductSlider = ({products, title}) => {


    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={"auto"}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    );
};

ProductSlider.propTypes = {
    products: PropTypes.arrayOf(Object),
    title: PropTypes.string,
}

export default ProductSlider;

