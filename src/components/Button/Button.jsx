import PropTypes from 'prop-types';
import s from './Button.module.scss';
import {ArrowDownIcon} from '../../assets/images/icons';
import cn from "classnames";

const Button = ({size, withArrow, type, className, ...props}) => {
    return (
        <button
            className={cn(s.btn, {
                    [s.ghost]: type === 'ghost',
                    [s.secondary]: type === 'secondary',
                    [s.white]: type === 'white',
                    [s.opaque]: type === 'opaque',
                    [s.primary]: type === 'primary',
                    [s.small]: size === "small",
                    [s.withArrow]: withArrow,
                }, className
            )}
            {...props}
        >
            {props.children} {withArrow && <ArrowDownIcon className={s.icon}/>}
        </button>
    )
};

Button.propTypes = {
    size: PropTypes.string,
    withArrow: PropTypes.bool,
    type: PropTypes.oneOf(['primary', 'secondary', 'white', 'opaque', 'ghost']),
};

export default Button;
