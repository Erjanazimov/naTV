import React from "react";
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Glavnaya from "./components/Glavnaya/Glavnaya";
import Glavnaya2 from "./components/Glavnaya-2/Glavnaya2";
import O_proekte from "./components/O_proekte/O_proekte";


function App() {
    return (
        <>
            <BrowserRouter>

                <Route path='/glavnaya2' component={Glavnaya2} exact/>
                <Route path='/' component={Glavnaya} exact/>
                <Route path='/o_proekte' component={O_proekte} exact/>


                {/*<Glavnaya />*/}
                {/*<Glavnaya />*/}
                {/*<Glavnaya2 />*/}
            </BrowserRouter>
        </>
    );
}

export default App;
