import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter} from "react-router-dom";
import Routing from "./routing/routing"
import Header from "./components/header";


function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routing/>
        </BrowserRouter>
    );
}

export default App;
