import React from 'react';
import cn from 'classnames';
import s from './Input.module.scss';

const Input = ({ placeholder, type = 'text', colorTheme, className, inputRef = null, ...props }) => {
    return (
        <input
            ref={inputRef}
            className={cn(s.input, { [s.light]: colorTheme === 'light' }, className)}
            placeholder={placeholder}
            type={type}
            {...props}
        />
    );
};

export default Input;
