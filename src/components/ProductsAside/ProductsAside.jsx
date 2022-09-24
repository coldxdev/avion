import React, {useState} from 'react';
import s from "./ProductsAside.module.scss";
import {Button, Checkbox} from "../index";
import {CloseIcon} from "../../assets/images/icons";
import cn from "classnames";

const ProductsAside = ({checkboxesState, onChangeCheckbox, ...props}) => {
    const [filtersVisibility, setFiltersVisibility] = useState(false);

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
                        isChecked={checkboxesState["furniture"].checked}
                        name={'furniture'}
                        onChange={onChangeCheckbox}
                        filterType={'categories'}
                    />
                    <Checkbox
                        className={s.checkbox}
                        title={"Homeware"}
                        name={'homeware'}
                        onChange={onChangeCheckbox}
                        isChecked={checkboxesState["homeware"].checked}
                        filterType={'categories'}
                    />
                    <Checkbox
                        className={s.checkbox}
                        title={"Sofas"}
                        name={'sofas'}
                        onChange={onChangeCheckbox}
                        isChecked={checkboxesState["sofas"].checked}
                        filterType={'categories'}
                    />
                    <Checkbox
                        className={s.checkbox}
                        title={"Light fittings"}
                        onChange={onChangeCheckbox}
                        name={'light-fittings'}
                        isChecked={checkboxesState["light-fittings"].checked}
                        filterType={'categories'}
                    />

                </div>
                <div className={s.block}>
                    <h5 className={s.blockTitle}>
                        Price
                    </h5>

                    <Checkbox
                        className={s.checkbox}
                        title={"0-100"}
                        name={"0-100"}
                        isChecked={checkboxesState["0-100"].checked}
                        onChange={onChangeCheckbox}
                        filterType={'prices'}
                    />

                    <Checkbox
                        className={s.checkbox}
                        title={"101 - 250"}
                        name={"101-250"}
                        isChecked={checkboxesState["101-250"].checked}
                        onChange={onChangeCheckbox}
                        filterType={'prices'}
                    />
                    <Checkbox
                        className={s.checkbox}
                        title={"250+"}
                        name={"250+"}
                        isChecked={checkboxesState["250+"].checked}
                        onChange={onChangeCheckbox}
                        filterType={'prices'}
                    />

                </div>
                <div className={s.block}>
                    <h5 className={s.blockTitle}>
                        Designer
                    </h5>

                    <Checkbox
                        className={s.checkbox}
                        title={"Robert Smith"}
                        name={"robert-smith"}
                        isChecked={checkboxesState["robert-smith"].checked}
                        onChange={onChangeCheckbox}
                        filterType={'categories'}
                    />
                    <Checkbox
                        className={s.checkbox}
                        title={"Liam Gallagher"}
                        name={"liam-gallagher"}
                        isChecked={checkboxesState["liam-gallagher"].checked}
                        onChange={onChangeCheckbox}
                        filterType={'categories'}
                    />
                    <Checkbox
                        className={s.checkbox}
                        title={"Biggie Smalls"}
                        name={"biggie-smalls"}
                        isChecked={checkboxesState["biggie-smalls"].checked}
                        onChange={onChangeCheckbox}
                        filterType={'categories'}
                    />
                    <Checkbox
                        className={s.checkbox}
                        title={"Thom Yorke"}
                        name={"thom-yorke"}
                        isChecked={checkboxesState["thom-yorke"].checked}
                        onChange={onChangeCheckbox}
                        filterType={'categories'}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductsAside;