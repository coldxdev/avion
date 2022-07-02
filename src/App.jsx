import './App.scss';
import {Bar, Footer, Header, AppRouter, ScrollToTop} from "./components";
import {useState} from "react";

function App() {
    const [menuActive, setMenuActive] = useState(false);

    return (
        <div className='wrapper'>
            <Bar/>
            <Header menuActive={menuActive} setMenuActive={setMenuActive}/>
            <main>
                <ScrollToTop/>
                <AppRouter/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
