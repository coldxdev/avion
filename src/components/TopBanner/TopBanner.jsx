import React from 'react';
import s from "./TopBanner.module.scss";
import {Button} from "../index";
import TopBannerImg from "../../assets/images/TopBannerImg.jpg";

const TopBanner = () => {
    return (
        <div className={s.topBanner}>
            <div className={`container ${s.wrapper}`}>
                <div className={s.content}>
                    <h1 className={s.title}>
                        The furniture brand for the future, with timeless designs
                    </h1>

                    <Button className={s.btn} type={'opaque'}> View collection </Button>

                    <p className={s.text}>
                        A new era in eco friendly furniture with Avelon, the French luxury retail
                        brand
                        with nice fonts, tasteful colors and a beautiful way to display things digitally
                        using modern web technologies.</p>
                </div>
                <div className={s.img}>
                    <img src={TopBannerImg} alt="Chair"/>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;