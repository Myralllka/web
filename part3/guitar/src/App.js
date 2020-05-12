import React from 'react';
import './styles/colors.css';

import Header from './templates/header'
import Main from './templates/main_container'
import Footer from './templates/footer'
import Metronome from "./templates/metronome";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom/modules/BrowserRouter";
function App() {
    return (
        <Router>
            <div className="App">
                <Header></Header>
                <Switch>
                    <Route path="/" component={Main}/>
                    <Route path="/metronome" component={Metronome}/>
                </Switch>
                <Footer></Footer>
            </div>
        </Router>
    );
}

export default App;
