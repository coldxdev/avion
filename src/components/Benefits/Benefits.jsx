import React from 'react';
import s from "./Benefits.module.scss";
import {CardIcon, DeliveryIcon, SproutIcon, SuccessIcon} from "../../assets/images/icons";

const Benefits = () => {
    return (
        <div className={s.benefits}>
            <div className="container">
                <h3 className={s.title}>What makes our brand different</h3>

                <div className={s.wrapper}>
                    <div className={s.item}>
                        <DeliveryIcon className={s.itemIcon}/>
                        <h5 className={s.itemTitle}>
                            Next day as standard
                        </h5>
                        <p className={s.itemText}>
                            Order before 3pm and get your order
                            the next day as standard
                        </p>
                    </div>
                    <div className={s.item}>
                        <SuccessIcon className={s.itemIcon}/>
                        <h5 className={s.itemTitle}>
                            Made by true artisans
                        </h5>
                        <p className={s.itemText}>
                            Handmade crafted goods made with
                            real passion and craftmanship
                        </p>
                    </div>
                    <div className={s.item}>
                        <CardIcon className={s.itemIcon}/>
                        <h5 className={s.itemTitle}>
                            Unbeatable prices
                        </h5>
                        <p className={s.itemText}>
                            For our materials and quality you won’t find better prices anywhere
                        </p>
                    </div>
                    <div className={s.item}>
                        <SproutIcon className={s.itemIcon}/>
                        <h5 className={s.itemTitle}>
                            Recycled packaging
                        </h5>
                        <p className={s.itemText}>
                            We use 100% recycled packaging to ensure our footprint is manageable
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Benefits;