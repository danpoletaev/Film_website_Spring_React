import React from 'react'
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from "axios";

//pages
import MainPage from "./pages/MainPage";
import CustomNav from "./components/CustomNav";
import FilmPage from "./pages/FIlmPage";


function App() {
    return (
        <Router>
            <div className="App">
                <CustomNav/>
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/film/:index" component={FilmPage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
