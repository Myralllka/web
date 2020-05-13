import React from 'react';
import '../styles/colors.css';
import '../styles/main.css';
import '../styles/header_and_footer.css';

export default class Chords extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="context">
                <h1 className="header_element">Guitar chords</h1>
                <p className="main_element"></p>
                <div className="page-footer"><a href="https://www.libertyparkmusic.com/read-guitar-chord-diagrams/">source of info</a></div>
            </div>

        )
    }
}