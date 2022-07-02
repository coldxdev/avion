import React, {useState} from 'react';
import s from "./ProductsAside.module.scss";
import {Button, Checkbox} from "../index";
import {CloseIcon} from "../../assets/images/icons";
import cn from "classnames";

const ProductsAside = () => {
    const [checkboxState, setCheckboxState] = useState({
        furniture: false,
        homeware: false,
        sofas: false,
        lightFittings: false,
    })
    const [filtersVisibility, setFiltersVisibility] = useState(false);

    const {furniture, homeware, sofas, lightFittings} = checkboxState;

    const onChangeCheckbox = (e) => {
        setCheckboxState({...checkboxState, [e.target.name]: e.target.checked})
    }

    const onMobileBtnClick = () => {
        setFiltersVisibility(true);
    }

    const onCloseBtnClick = () => {
        setFiltersVisibility(false);
    }

    return (
        <div className={s.aside}>
            <Button
                className={s.mobileBtn}
                type={'secondary'}
                withArrow={true}
                size={'small'}
                onClick={onMobileBtnClick}
            >
                Filters
            </Button>
            <div className={cn(s.wrapper, {
                [s.visible]: filtersVisibility,
            })}>
                <button className={s.closeBtn} onClick={onCloseBtnClick}>
                    <CloseIcon/>
                </button>
                <div className={s.block}>
                    <h5 className={s.blockTitle}>
                        Product type
                    </h5>

                    <Checkbox
                        className={s.checkbox}
                        title={"Furniture"}
                        value={furniture}
                        name={'furniture'}
                        onChange={onChangeCheckbox}
                    />
                    <Checkbox
                        className={s.checkbox}
                        title={"Homeware"}
                        name={'homeware'}
                        onChange={onChangeCheckbox}
                        value={homeware}
                    />
                    <Checkbox
                        className={s.checkbox}
                        title={"Sofas"}
                        name={'sofas'}
                        onChange={onChangeCheckbox}
                        value={sofas}
                    />
                    <Checkbox
                        className={s.checkbox}
                        title={"Light fittings"}
                        name={'lightFittings'}
                        onChange={onChangeCheckbox}
                        value={lightFittings}
                    />

                </div>
                <div className={s.block}>
                    <h5 className={s.blockTitle}>
                        Price
                    </h5>

                    <Checkbox
                        className={s.checkbox}
                        title={"0 - 100"}
                    />
                    <Checkbox
                        className={s.checkbox}
                        title={"101 - 250"}
                    />
                    <Checkbox
                        className={s.checkbox}
                        title={"250 +"}
                    />

                </div>
                <div className={s.block}>
                    <h5 className={s.blockTitle}>
                        Designer
                    </h5>

                    <Checkbox
                        className={s.checkbox}
                        title={"Robert Smith"}
                    />
                    <Checkbox
                        className={s.checkbox}
                        title={"Liam Gallagher"}
                    />
                    <Checkbox
                        className={s.checkbox}
                        title={"Biggie Smalls"}
                    />
                    <Checkbox
                        className={s.checkbox}
                        title={"Thom Yorke"}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductsAside;