import PropTypes from 'prop-types';
import s from './Button.module.scss';
import {ArrowDownIcon} from '../../assets/images/icons';
import cn from "classnames";
import {Link} from "react-router-dom";

const Button = ({size, withArrow, type = 'white', tag = 'button', href, className, ...props}) => {

    const btnClassNames = cn(s.btn, {
        [s.ghost]: type === 'ghost',
        [s.secondary]: type === 'secondary',
        [s.white]: type === 'white',
        [s.opaque]: type === 'opaque',
        [s.primary]: type === 'primary',
        [s.small]: size === "small",
        [s.withArrow]: withArrow,
    }, className);

    return tag === 'button'
        ? (
            <button
                className={btnClassNames}
                {...props}
            >
                {props.children}
                {withArrow && <ArrowDownIcon className={s.icon}/>}
            </button>
        )
        : (
            <Link
                to={href}
                className={btnClassNames}
                {...props}
            >
                {props.children}
                {withArrow && <ArrowDownIcon className={s.icon}/>}
            </Link>
        )


};

Button.propTypes = {
    size: PropTypes.string,
    withArrow: PropTypes.bool,
    type: PropTypes.oneOf(['primary', 'secondary', 'white', 'opaque', 'ghost']),
    tag: PropTypes.oneOf(['link', 'button']),
    href: PropTypes.string,
};

export default Button;
