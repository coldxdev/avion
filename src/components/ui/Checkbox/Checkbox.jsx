import React from 'react';
import s from "./Checkbox.module.scss";
import PropTypes from "prop-types";
import cn from "classnames";

const Checkbox = ({className, title, isChecked, onChange, filterType, ...props}) => {

    return (
        <label className={cn(s.label, {
            [s.checked]: isChecked,
        }, className)}>
            <input className={'sr-only'}
                   onChange={onChange}
                   checked={isChecked}
                   type="checkbox"
                   filtertype={filterType ? filterType : null}
                   {...props}
            />
            <span>{title}</span>
        </label>
    );
};

Checkbox.propTypes = {
    title: PropTypes.string,
    isChecked: PropTypes.bool,
    onChange: PropTypes.func,
    filterType: PropTypes.string,
}

export default Checkbox;