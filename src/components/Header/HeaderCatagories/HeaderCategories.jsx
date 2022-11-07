import React from 'react';
import { Link } from 'react-router-dom';
import s from '../Header.module.scss';
import {PRODUCTS_LISTINGS_ROUTE} from "../../../utils/consts";
import PropTypes from "prop-types";

const HeaderCategories = ({ categories }) => {
    const menuItemElems = categories.map(category => (
        <li className={s.menuItem} key={category.id}>
            <Link 
                className={s.menuLink}
                to={`/collection/${category.slug}`}
            >
                    {category.name}
            </Link>
        </li>
    ));

    return (
        <div className={s.headerCategories}>
            <nav className={s.categories}>
                <div className={`container ${s.categoriesWrapper}`}>
                    <ul className={s.menuList}>
                        <li className={s.menuItem}>
                            <Link
                                className={s.menuLink}
                                to={PRODUCTS_LISTINGS_ROUTE}
                            >
                                All
                            </Link>
                        </li>

                        {menuItemElems}
                    </ul>
                </div>
            </nav>
        </div>
    );
};



HeaderCategories.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object),
}

export default HeaderCategories;
