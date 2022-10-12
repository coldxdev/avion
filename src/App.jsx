import './App.scss';
import {Bar, Footer, Header, AppRouter, ScrollToTop, Loader} from "./components";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "./redux/action-creators/homeAC";
import {ToastContainer, Zoom} from 'react-toastify';
import {fetchCartItems} from "./redux/action-creators/cartAC";

//TODO: сделать типизацию PropTypes

function App() {
    const [menuActive, setMenuActive] = useState(false);
    const {isLoading} = useSelector(state => state.app);
    const {cartItems} = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchCartItems());
    }, []);

    return (
        <div className='wrapper'>
            {isLoading && <Loader/>}
            <Bar/>
            <Header
                menuActive={menuActive}
                setMenuActive={setMenuActive}
                cartCount={cartItems.length}
            />
            <main>
                <ScrollToTop/>
                <AppRouter/>
            </main>
            <Footer/>
            <ToastContainer
                transition={Zoom}
                autoClose={1000}
                position={'bottom-left'}
            />
        </div>
    );
}

export default App;
