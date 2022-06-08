import './App.scss';
import AppRouter from "./components/AppRouter";
import {Bar, Footer, Header} from "./components";

function App() {
    return (
        <div className='wrapper'>
            <Bar/>
            <Header/>
            <main>
                <AppRouter/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
