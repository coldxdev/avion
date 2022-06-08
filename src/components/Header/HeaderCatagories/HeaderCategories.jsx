import React from 'react';
import s from "../Header.module.scss";

const HeaderCategories = () => {
    return (
        <nav className={s.categories}>
            <div className={`container ${s.categoriesWrapper}`}>
                <ul className={s.menuList}>
                    <li className={s.menuItem}>
                        <a className={s.menuLink} href="#">Plant pots</a>
                    </li>
                    <li className={s.menuItem}>
                        <a className={s.menuLink} href="#">Ceramics</a>
                    </li>
                    <li className={s.menuItem}>
                        <a className={s.menuLink} href="#">Tables</a>
                    </li>
                    <li className={s.menuItem}>
                        <a className={s.menuLink} href="#">Chairs</a>
                    </li>
                    <li className={s.menuItem}>
                        <a className={s.menuLink} href="#">Crockery</a>
                    </li>
                    <li className={s.menuItem}>
                        <a className={s.menuLink} href="#">Tableware</a>
                    </li>
                    <li className={s.menuItem}>
                        <a className={s.menuLink} href="#">Cutlery</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default HeaderCategories;