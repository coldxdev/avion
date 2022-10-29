import s from './Header.module.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderCategories from './HeaderCatagories/HeaderCategories';
import { SearchIcon, CartIcon, UserIcon, MenuIcon, CloseIcon } from '../../assets/images/icons/';
import { CART_ROUTE, HOME_ROUTE, PRODUCTS_LISTINGS_ROUTE, SEARCH_ROUTE } from '../../utils/consts';

const Header = ({ menuActive, setMenuActive, cartCount = 0, categories}) => {

    const handleMenuBtn = () => {
        setMenuActive(!menuActive);
    };

    return (
        <header>
            <div className={cn('container', s.header, { [s.menuActive]: menuActive })}>
                <Link className={s.logo} to={HOME_ROUTE}>
                    Avion
                </Link>
                <div className={s.wrapper}>
                    <nav className={s.menu}>
                        <ul className={cn(s.menuList, s.mobileMenu)}>
                            <li className={s.menuItem}>
                            </li>
                            <li className={s.menuItem}>
                                <Link className={s.menuLink} to={PRODUCTS_LISTINGS_ROUTE}>
                                    Products Listings
                                </Link>
                            </li>
                            <li className={s.menuItem}>
                                <a className={s.menuLink} href='#'>
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className={s.actions}>
                        <Link to={SEARCH_ROUTE} className={s.search}>
                            <SearchIcon />
                        </Link>
                        <Link to={CART_ROUTE} className={s.cart}>
                            <CartIcon />
                            <span className={s.cartCount}>{cartCount}</span>
                        </Link>
                        <a href='#' className={s.user}>
                            <UserIcon />
                        </a>
                        <button onClick={handleMenuBtn} className={s.menuBtn}>
                            {menuActive ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>
            <HeaderCategories categories={categories} />
        </header>
    );
};

Header.propTypes = {
    menuActive: PropTypes.bool,
    setMenuActive: PropTypes.func,
};

export default Header;
