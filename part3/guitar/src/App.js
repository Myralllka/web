import React from 'react';
import './styles/colors.css';

import Header from './templates/header'
import Main from './templates/main_container'
import Footer from './templates/footer'
import Metronome from "./templates/metronome";
import Tuner from "./templates/tuner";
import Chords from "./templates/chords";
import Songs from "./templates/songs";
import Notes from "./templates/notes";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Header></Header>
                <Switch>
                    <Route path="/metronome" component={Metronome}/>
                    <Route path="/tuner" component={Tuner}/>
                    <Route path="/chords" component={Chords}/>
                    <Route path="/notes" component={Notes}/>
                    <Route path="/songs" component={Songs}/>
                    <Route path="/" component={Main}/>
                </Switch>
                <Footer></Footer>
            </div>
        </Router>
    );
}

export default App;
