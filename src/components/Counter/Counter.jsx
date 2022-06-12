import React, {useState} from 'react';
import s from './Counter.module.scss'

const Counter = () => {
    const [value, setValue] = useState(1);

    const decrementValue = () => {
        if (value < 2) {
            return
        }
        setValue(value - 1);
    }
    const incrementValue = () => {
        setValue(value + 1);
    }

    const onChange = (e) => {
        const value = Number(e.target.value);
        console.log(value)
        if (value < 1) {
            setValue(1);
            return;
        }
        setValue(value)
    };

    return (
        <div className={s.counter}>
            <button className={s.btn} onClick={decrementValue}>-</button>
            <input className={s.input} onChange={onChange} value={value} type="number"/>
            <button className={s.btn} onClick={incrementValue}>+</button>
        </div>
    );
};

export default Counter;