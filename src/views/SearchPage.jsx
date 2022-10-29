import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductList } from '../components';
import Input from '../components/ui/Input/Input';
import { addToCart } from '../redux/action-creators/cartAC';
import { updateSearchInput } from '../redux/action-creators/searchAC';
import { AMOUNT_PRODUCTS_COLLECTION } from '../utils/consts';
import { getProductsByName } from '../utils/functions';

const SearchPage = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.app.products);
    const { cartItems } = useSelector(state => state.cart);
    const cartItemsId = cartItems.map(el => el.product_id) || [];
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

    const onAddToCart = (productID, qnty) => {
        return () => {
            dispatch(addToCart(productID, qnty));
        };
    };


    return (
        <div className='container search'>
            {searchInput ? <h2 className='searchTitle'>{filteredProductsByName.length} Results for "{searchInput}"</h2> : null}
            
            <Input onChange={onSearchInput} inputRef={inputRef} className="searchInput" placeholder={'Search...'} />
            <ProductList
                products={slicedProducts}
                btnText={'Load more'}
                itemsPerRow={'4'}
                onClickBtn={onLoadMore}
                hasNextPage={hasNextPage}
                withoutContainer
                cartItemsId={cartItemsId}
                onAddToCart={onAddToCart}
            />
        </div>
    );
};

export default SearchPage;
