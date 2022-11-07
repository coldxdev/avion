import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ProductList} from '../components';
import Input from '../components/ui/Input/Input';
import {addToCartAC} from '../redux/action-creators/cartAC';
import {updateSearchInput} from '../redux/action-creators/searchAC';
import {AMOUNT_PRODUCTS_COLLECTION} from '../utils/consts';
import {getProductsByName} from '../utils/functions';
import {incrementCurrentPage} from "../redux/action-creators/appAC";

const SearchPage = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.app.products);
    const {cartItemsId} = useSelector(state => state.cart);
    const {currentPage, searchInput} = useSelector(state => state.search);

    const inputRef = useRef(null);

    const filteredProductsByName = getProductsByName(products, searchInput);
    const slicedProducts = filteredProductsByName.slice(0, currentPage * AMOUNT_PRODUCTS_COLLECTION);
    const hasNextPage = filteredProductsByName.length > slicedProducts.length;


    const onSearchInput = () => {
        dispatch(updateSearchInput(inputRef.current.value));
    }

    const onLoadMore = () => {
        dispatch(incrementCurrentPage());
    };

    const addToCart = (productID, qnty) => {
        dispatch(addToCartAC(productID, qnty));
    };


    return (
        <div className='container search'>
            <Input onChange={onSearchInput} inputRef={inputRef} className="searchInput" placeholder={'Search...'}/>

            {searchInput &&
                <h2 className='searchTitle'>
                    {filteredProductsByName.length} results for "{searchInput}"
                </h2>
            }

            <ProductList
                products={slicedProducts}
                btnText={'Load more'}
                itemsPerRow={'4'}
                withoutContainer
                withoutPadding
                onClickBtn={onLoadMore}
                hasNextPage={hasNextPage}
                cartItemsId={cartItemsId}
                addToCart={addToCart}
            />
        </div>
    );
};

export default SearchPage;
