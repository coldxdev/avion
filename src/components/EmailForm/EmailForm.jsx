import React from 'react';
import s from "./EmailForm.module.scss"
import TextInput from "../ui/TextInput/TextInput";

const EmailForm = () => {
    return (
        <div className={s.emailForm}>
            <div className="container">
                <form className={s.form}>
                    <h2 className={s.title}>
                        Join the club and get the benefits
                    </h2>
                    <p className={s.text}>
                        Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and
                        more
                    </p>
                    <TextInput className={s.textInput} btnText={'Sign up'}  colorTheme={'light'} placeholder={'your@email.com'}/>
                </form>
            </div>
        </div>
    );
};

export default EmailForm;
