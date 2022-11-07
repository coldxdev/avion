import {useEffect, useState} from "react";
import s from './Header.module.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SearchIcon, CartIcon, UserIcon, MenuIcon, CloseIcon } from '../../assets/images/icons/';
import { CART_ROUTE, HOME_ROUTE, PRODUCTS_LISTINGS_ROUTE, SEARCH_ROUTE } from '../../utils/consts';

const Header = ({ menuActive, setMenuActive, cartCount = 0}) => {
    const [fixed, setFixed] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', isFixed);

        return () => {
            window.removeEventListener('scroll', isFixed);
        }

    }, [])

    const isFixed = (e) => {
        const scrollTop = window.scrollY;

        setFixed(scrollTop > 80);
    }

    const handleMenuBtn = () => {
        setMenuActive(!menuActive);
    };

    const onClickMenuLink = () => {
        setMenuActive(false);
    }

    return (
        <header className={cn(s.header, {
            [s.fixed]: fixed
        })}>
            <div className={cn('container', s.headerContainer, { [s.menuActive]: menuActive })}>
                <Link className={s.logo} to={HOME_ROUTE} onClick={onClickMenuLink}>
                    Avion
                </Link>
                <div className={s.wrapper}>
                    <nav className={s.menu}>
                        <ul className={cn(s.menuList, s.mobileMenu)}>
                            <li className={s.menuItem} onClick={onClickMenuLink}>
                                <Link className={s.menuLink} to={PRODUCTS_LISTINGS_ROUTE}>
                                    Products Listings
                                </Link>
                            </li>
                            <li className={s.menuItem} onClick={onClickMenuLink}>
                                <a className={s.menuLink} href='#'>
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className={s.actions}>
                        <Link to={SEARCH_ROUTE} className={s.search} onClick={onClickMenuLink}>
                            <SearchIcon />
                        </Link>
                        <Link to={CART_ROUTE} className={s.cart} onClick={onClickMenuLink}>
                            <CartIcon />
                            <span className={s.cartCount}>{cartCount}</span>
                        </Link>
                        <a href='#' className={s.user} onClick={onClickMenuLink}>
                            <UserIcon />
                        </a>
                        <button onClick={handleMenuBtn} className={s.menuBtn}>
                            {menuActive ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>

        </header>
    );
};

Header.propTypes = {
    menuActive: PropTypes.bool,
    setMenuActive: PropTypes.func,
    cartCount: PropTypes.number,
};

export default Header;
