import React from 'react';
import s from "./Checkbox.module.scss";
import PropTypes from "prop-types";
import cn from "classnames";

const Checkbox = ({className, title, value, onChange, ...props}) => {
    return (
        <label className={cn(s.label, {
            [s.checked]: value,
        }, className)}>
            <input className={'sr-only'} onChange={onChange} value={value} checked={value} type="checkbox" {...props} />
            <span>{title}</span>
        </label>
    );
};

Checkbox.propTypes = {}

export default Checkbox;