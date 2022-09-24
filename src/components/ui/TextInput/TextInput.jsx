import React from 'react';
import PropTypes from "prop-types";
import s from "./TextInput.module.scss"
import {Button} from "../../index";
import cn from "classnames";

const TextInput = ({placeholder, type = 'dark', className, ...props}) => {
    return (
        <div className={cn(s.textInput, className)} {...props}>
            <input className={cn(s.input, {[s.light]: type === 'light'})}
                   placeholder={placeholder}
                   type="text"
            />
            <Button className={s.btn} type={type === 'dark' ? 'white' : 'primary'}> Sign up</Button>
        </div>
    );
};

TextInput.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['dark', 'light'])
}


export default TextInput;