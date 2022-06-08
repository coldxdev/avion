import s from "./Header.module.scss";
import {SearchIcon, CartIcon, UserIcon, MenuIcon, CloseIcon} from "../../assets/images/icons/";
import HeaderCategories from "./HeaderCatagories/HeaderCategories";
import {useState} from "react";
import cn from "classnames";

const Header = (props) => {
    const [menuActive, setMenuActive] = useState(false);

    const handleMenuBtn = () => {
        setMenuActive(!menuActive)
    }

    return (
        <header>
            <div className={`container ${s.header}`}>
                <a className={s.logo} href={"#"}>Avion</a>
                <div className={s.wrapper}>
                    <nav className={s.menu}>
                        <ul className={cn(s.menuList, s.mobileMenu, {[s.mobileMenuActive]: menuActive})}>
                            <li className={s.menuItem}>
                                <a className={s.menuLink} href="#">About us</a>
                            </li>
                            <li className={s.menuItem}>
                                <a className={s.menuLink} href="#">Contact</a>
                            </li>
                            <li className={s.menuItem}>
                                <a className={s.menuLink} href="#">Blog</a>
                            </li>
                        </ul>
                    </nav>
                    <div className={s.actions}>
                        <button className={s.search}>
                            <SearchIcon/>
                        </button>
                        <a href="#" className={s.cart}>
                            <CartIcon/>
                        </a>
                        <a href="#" className={s.user}>
                            <UserIcon/>
                        </a>
                        <button
                            onClick={handleMenuBtn}
                            className={s.menuBtn}>
                            {menuActive
                                ? <CloseIcon/>
                                : <MenuIcon/>
                            }
                        </button>
                    </div>
                </div>
            </div>
            <HeaderCategories/>
        </header>
    );
};

Header.propTypes = {};

export default Header;