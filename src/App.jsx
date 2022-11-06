import './App.scss';
import { useEffect, useState } from 'react';
import { ToastContainer, Zoom } from 'react-toastify';
import { Footer, Header, AppRouter, ScrollToTop, Loader } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './redux/action-creators/appAC';
import { fetchCartItemsAC } from './redux/action-creators/cartAC';
import { fetchCategories } from './redux/action-creators/collectionAC';
import useScrollBlock from './hooks/useScrollBlock';

// TODO: [ ] Cделать типизацию PropTypes
// TODO: [ ] Застилизовать react-toastify
// TODO: [x] Сделать обработку нескольких вызовов setIsLoading чтобы выполнялся только последний
// TODO: [x] Lazy loading image

function App() {
    const [menuActive, setMenuActive] = useState(false);
    const { isLoading } = useSelector(state => state.app.loader); 
    const { cartItems } = useSelector(state => state.cart);
    const categories = useSelector(state => state.collection.categories);
    const dispatch = useDispatch();
    const [blockScroll, allowScroll] = useScrollBlock();

    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchCartItemsAC());
        dispatch(fetchCategories());
    }, []);

    menuActive ? blockScroll() : allowScroll();

    return (
        <div className='wrapper'>
            {isLoading && <Loader />}
            <Header
                menuActive={menuActive}
                setMenuActive={setMenuActive}
                cartCount={cartItems.length}
                categories={categories}
            />
            <main>
                <ScrollToTop />
                <AppRouter />
            </main>
            <Footer />
            <ToastContainer transition={Zoom} autoClose={1000} position={'bottom-left'} />
        </div>
    );
}

export default App;
