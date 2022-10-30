import React from 'react';
import s from "./TopBanner.module.scss";
import {Button} from "../index";
import TopBannerImg from "../../assets/images/TopBannerImg.jpg";
import {NEW_PRODUCTS_CATEGORY} from "../../utils/consts";
import LazyLoad from 'react-lazy-load';

const TopBanner = () => {
    return (
        <div className={s.topBanner}>
            <div className={`container ${s.wrapper}`}>
                <div className={s.content}>
                    <h1 className={s.title}>
                        The furniture brand for the future, with timeless designs
                    </h1>

                    <Button className={s.btn} type={'opaque'} tag={'link'} href={`/collection/${NEW_PRODUCTS_CATEGORY}`}> View collection </Button>

                    <p className={s.text}>
                        A new era in eco friendly furniture with Avellone, the French luxury retail
                        brand
                        with nice fonts, tasteful colors and a beautiful way to display things digitally
                        using modern web technologies.
                    </p>
                </div>
                <div className={s.img}>
                    <LazyLoad offset={300}>
                         <img src={TopBannerImg} alt="Chair"/>
                    </LazyLoad>                   
                </div>
            </div>
        </div>
    );
};

export default TopBanner;
