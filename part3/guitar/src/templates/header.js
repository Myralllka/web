import React from 'react';
import '../styles/colors.css';
import '../styles/main.css';
import '../styles/header_and_footer.css';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            entries: [{
                page_name: "Main page",
                url: "../App.js",
                id: 1
            }, {
                page_name: "Main chords",
                url: "/chords",
                id: 2
            }, {
                page_name: "Tuner",
                url: "/tuner",
                id: 3
            }, {
                page_name: "Metronome",
                url: "/metronome",
                id: 4
            }, {
                page_name: "Easy songs",
                url: "/songs",
                id: 5
            }, {
                page_name: "Notes",
                url: "/notes",
                id: 6
            }]
        }
    }

    render() {
        return (
            <div className="page-header">
                <ul className="header_menu">
                    {this.state.entries.map((entry) => (
                        <li key={entry.id}><Link to={entry.url}>{entry.page_name}</Link></li>
                    ))}
                </ul>
            </div>
        )
    }
}