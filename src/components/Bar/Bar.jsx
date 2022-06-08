import React, {useState} from 'react';
import s from "./Bar.module.scss";
import {DeliveryIcon, CloseIcon} from "../../assets/images/icons";

const Bar = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => {
        setIsVisible(false);
    }

    if (!isVisible) return;
    return (
        <div className={s.bar}>
            <div className={s.wrapper}>
                <DeliveryIcon className={s.deliveryIcon}/>
                <p className={s.text}>
                    Free delivery on all orders over £50 with code easter checkout
                </p>
            </div>
            <button className={s.btn} onClick={handleClick}><CloseIcon/></button>
        </div>
    )
};

export default Bar;