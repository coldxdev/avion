import React from 'react';
import s from "./Features.module.scss"
import FeaturesBg from '../../assets/images/features/features-bg.jpg';
import {Button} from "../index";

const Features = () => {
    return (
        <div className={s.features}>
            <div className={s.wrapper}>
                <div className={s.content}>
                    <h3 className={s.title}>
                        From a studio in London to a global brand with
                        over 400 outlets
                    </h3>
                    <div className={s.text}>
                        <p>When we started Avion, the idea was simple. Make high quality furniture
                            affordable and available for the mass market.
                        </p>
                        <p>Handmade, and lovingly crafted furniture and
                            homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for
                            the
                            London interior design community.
                        </p>
                    </div>

                    <Button className={s.btn} type={'secondary'}>Get in touch</Button>
                </div>
            </div>
            <div className={s.img}>
                <img className={s.img} src={FeaturesBg} alt={'Features Img'}/>
            </div>
        </div>
    );
};

export default Features;