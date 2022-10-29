import React from 'react';
import PropTypes from "prop-types";
import s from "./TextInput.module.scss"
import {Button} from "../../index";
import cn from "classnames";
import Input from '../Input/Input';

const TextInput = ({placeholder, btnText, colorTheme = 'dark', className, ...props}) => {
    return (
        <div className={cn(s.textInput, className)} {...props}>
            <Input className={cn(s.input, {[s.light]: colorTheme === 'light'})} colorTheme={colorTheme} placeholder={placeholder} />
            <Button className={s.btn} type={colorTheme === 'dark' ? 'white' : 'primary'}> {btnText}</Button>
        </div>
    );
};

TextInput.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['dark', 'light'])
}


export default TextInput;
