import React from 'react';
import '../styles/colors.css';
import '../styles/header_and_footer.css';
import MyForm from "./form";
import {NavLink} from "react-router-dom";

export default class Main extends React.Component {
    state = {
        entries: []
    }
    componentWillMount() {
        fetch('/main_page').then(resp => {
            return resp.json();
        }).then(body => {
            console.log(body)
            this.setState({
                entries: body
            })
        })
    }
    render() {
        return (
            <div className="body-page-element">
                {this.state.entries.map((entry) => {
                    const Tag = entry.type;
                    return <div><Tag className={entry.class}>{entry.text}</Tag></div>
                })}
                <div className="main-element">
                    <MyForm/>
                </div>
            </div>
        )
    }
}