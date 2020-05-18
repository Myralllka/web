import React from 'react';
import '../styles/colors.css';
import '../styles/main.css';
import '../styles/header_and_footer.css';
import {NavLink} from 'react-router-dom';

export default class Header extends React.Component {

    state = {
        entries: []
    }

    componentWillMount() {
        fetch('/entries').then(resp => {
            return resp.json();
        }).then(body => {
            console.log(body);
            this.setState({
                entries: body
            })
        })
    }

    render() {
        return (
            <div className="page-header">
                <ul className="header_menu">
                    {this.state.entries.map((entry) => (
                        <li key={entry.id}><NavLink exact activeClassName="menu-active"
                                                    to={entry.url}>{entry.PageName}</NavLink></li>
                    ))}
                </ul>
            </div>
        )
    }
}