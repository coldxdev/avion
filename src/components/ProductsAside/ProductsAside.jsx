import React, {useState} from 'react';
import s from "./ProductsAside.module.scss";
import {Button, Checkbox} from "../index";
import {CloseIcon} from "../../assets/images/icons";
import PropTypes from "prop-types";
import cn from "classnames";

const ProductsAside = ({checkboxesState, onChangeCheckbox, ...props}) => {
    const [filtersVisibility, setFiltersVisibility] = useState(false);


    const getCheckboxElemsByType = (checkboxType) => (
        checkboxesState
            .filter(checkbox => checkbox.type === checkboxType)
            .map(checkbox => (
                <Checkbox
                    className={s.checkbox}
                    label={checkbox.title}
                    isChecked={checkbox.checked}
                    name={checkbox.name}
                    onChange={onChangeCheckbox}
                    filterType={checkbox.type}
                    key={checkbox.name}
                />
            ))
    )

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
                        Categories
                    </h5>

                    {getCheckboxElemsByType('category')}

                </div>
                <div className={s.block}>
                    <h5 className={s.blockTitle}>
                        Price
                    </h5>

                    {getCheckboxElemsByType('price')}
                </div>
            </div>
        </div>
    );
};

ProductsAside.propTypes = {
    checkboxesState: PropTypes.array,
    onChangeCheckbox: PropTypes.func,
}

export default ProductsAside;