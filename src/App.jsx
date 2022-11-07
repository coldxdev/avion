import './App.scss';
import {useEffect, useState} from 'react';
import {ToastContainer, Zoom} from 'react-toastify';
import {Footer, Header, AppRouter, ScrollToTop, Loader, HeaderCategories} from './components';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from './redux/action-creators/appAC';
import {fetchCartItemsAC} from './redux/action-creators/cartAC';
import {fetchCategories} from './redux/action-creators/collectionAC';

function App() {
    const dispatch = useDispatch();
    const [menuActive, setMenuActive] = useState(false);
    const {isLoading} = useSelector(state => state.app.loader);
    const {totalCartItems} = useSelector(state => state.cart);
    const categories = useSelector(state => state.collection.categories);


    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchCartItemsAC());
        dispatch(fetchCategories());
    }, []);

    return (
        <div className='wrapper'>
            {isLoading && <Loader/>}
            <Header
                menuActive={menuActive}
                setMenuActive={setMenuActive}
                cartCount={totalCartItems}
            />
            <HeaderCategories categories={categories}/>
            <main>
                <ScrollToTop/>
                <AppRouter/>
            </main>
            <Footer/>
            <ToastContainer
                transition={Zoom}
                autoClose={1000}
                limit={1}
                position={'bottom-left'}
            />
        </div>
    );
}

export default App;
