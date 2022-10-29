import React from 'react';
import { Link } from 'react-router-dom';
import s from '../Header.module.scss';

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
        <nav className={s.categories}>
            <div className={`container ${s.categoriesWrapper}`}>
                <ul className={s.menuList}>{menuItemElems}</ul>
            </div>
        </nav>
    );
};

export default HeaderCategories;
