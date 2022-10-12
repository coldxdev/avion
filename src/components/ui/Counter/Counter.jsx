import React, {useState} from 'react';
import s from './Counter.module.scss';
import PropTypes from 'prop-types';

const Counter = ({qnty, setQnty,}) => {
    const decrementValue = () => {
        if (qnty <= 1) {
            return;
        }
        setQnty(--qnty);
    };

    const incrementValue = () => {
        setQnty(++qnty);
    };

    const onChange = e => {
        const value = +e.target.value;
        if (value <= 0) {
            setQnty(1);
        } else {
            setQnty(value);
        }
    };

    return (
        <div className={s.counter}>
            <button className={s.btn} disabled={qnty <= 1 ? true : null} onClick={decrementValue}>
                -
            </button>
            <input className={s.input} onChange={onChange} value={qnty} type='number'/>
            <button className={s.btn} onClick={incrementValue}>
                +
            </button>
        </div>
    );
};

Counter.propTypes = {
    qnty: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    setQnty: PropTypes.func,
    onChange: PropTypes.func,
};

export default Counter;
