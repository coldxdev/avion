import './App.scss';
import {Bar, Footer, Header, AppRouter, ScrollToTop} from "./components";

function App() {
    return (
        <div className='wrapper'>
            <Bar/>
            <Header/>
            <main>
                <ScrollToTop/>
                <AppRouter/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
