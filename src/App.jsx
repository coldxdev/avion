import './App.scss';
import {Bar, Footer, Header, AppRouter, ScrollToTop, Loader} from "./components";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "./redux/reducers/homeReducer";

function App() {
    const [menuActive, setMenuActive] = useState(false);
    const {isLoading} = useSelector(state => state.app);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (<div className='wrapper'>
        {isLoading && <Loader/>}
        <Bar/>
        <Header menuActive={menuActive} setMenuActive={setMenuActive}/>
        <main>
            <ScrollToTop/>
            <AppRouter/>
        </main>
        <Footer/>
    </div>);
}

export default App;
