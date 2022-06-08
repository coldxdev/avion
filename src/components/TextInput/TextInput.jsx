import React from 'react';
import PropTypes from "prop-types";
import s from "./TextInput.module.scss"
import {Button} from "../index";

const TextInput = ({placeholder}) => {
    return (
        <div className={s.textInput}>
            <input className={s.input}
                   placeholder={placeholder}
                   type="text"
            />
            <Button className={s.btn} type={'white'}> Sign up </Button>
        </div>
    );
};

TextInput.propTypes = {
    placeholder: PropTypes.string,
}


export default TextInput;