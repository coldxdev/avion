import React from 'react';
import s from "./Footer.module.scss";
import {Button} from "../index";
import {
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
    PinterestIcon,
    SkypeIcon,
    TwitterIcon
} from "../../assets/images/icons";
import TextInput from "../ui/TextInput/TextInput";


const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={'container'}>
                <div className={s.main}>
                    <div className={s.column}>
                        <nav className={s.menu}>
                            <h5 className={s.title}>
                                Menu
                            </h5>
                            <ul className={s.menuList}>
                                <li className={s.menuItem}>
                                    <a className={s.menuLink} href="#">New arrivals</a>
                                </li>
                                <li className={s.menuItem}>
                                    <a className={s.menuLink} href="#">Best sellers</a>
                                </li>
                                <li className={s.menuItem}>
                                    <a className={s.menuLink} href="#">Recently viewed</a>
                                </li>
                                <li className={s.menuItem}>
                                    <a className={s.menuLink} href="#">Popular this week</a>
                                </li>
                                <li className={s.menuItem}>
                                    <a className={s.menuLink} href="#">All products</a>
                                </li>
                            </ul>
                        </nav>
                        <nav className={s.menu}>
                            <h5 className={s.title}>
                                Categories
                            </h5>
                            <ul className={s.menuList}>
                                <li className={s.menuItem}>
                                    <a className={s.menuLink} href="#">Crockery</a>
                                </li>
                                <li className={s.menuItem}>
                                    <a className={s.menuLink} href="#">Furniture</a>
                                </li>
                                <li className={s.menuItem}>
                                    <a className={s.menuLink} href="#">Homeware</a>
                                </li>
                                <li className={s.menuItem}>
                                    <a className={s.menuLink} href="#">Plant pots</a>
                                </li>
                                <li className={s.menuItem}>
                                    <a className={s.menuLink} href="#">Chairs</a>
                                </li>
                                <li className={s.menuItem}>
                                    <a className={s.menuLink} href="#">Crockery</a>
                                </li>
                            </ul>
                        </nav>
                        <nav className={s.menu}>
                            <h5 className={s.title}>
                                Our company
                            </h5>
                            <ul className={s.menuList}>
                                <li className={s.menuItem}>
                                    <a className={s.menuLink} href="#">About us</a>
                                </li>
                                <li className={s.menuItem}>
                                    <a className={s.menuLink} href="#">Vacancies</a>
                                </li>
                                <li className={s.menuItem}>
                                    <a className={s.menuLink} href="#">Contact us</a>
                                </li>
                                <li className={s.menuItem}>
                                    <a className={s.menuLink} href="#">Privacy</a>
                                </li>
                                <li className={s.menuItem}>
                                    <a className={s.menuLink} href="#">Returns policy</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={s.columnInput}>
                        <h5 className={`${s.title} ${s.inputTitle}`}>
                            Join our mailing list
                        </h5>
                        <TextInput placeholder={'your@email.com'} />
                    </div>
                </div>
                <div className={s.copy}>
                    <p className={s.copyText}>Copyright 2022 Avion LTD</p>
                    <ul className={s.socials}>
                        <li><a className={s.socialsLink} href="#"><LinkedinIcon/></a></li>
                        <li><a className={s.socialsLink} href="#"><FacebookIcon/></a></li>
                        <li><a className={s.socialsLink} href="#"><InstagramIcon/></a></li>
                        <li><a className={s.socialsLink} href="#"><SkypeIcon/></a></li>
                        <li><a className={s.socialsLink} href="#"><TwitterIcon/></a></li>
                        <li><a className={s.socialsLink} href="#"><PinterestIcon/></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;