import React from 'react';
import '../styles/colors.css';
import '../styles/header_and_footer.css';
import MyForm from "./form";

export default class Main extends React.Component {
    state = {
        entries: []
    }

    componentDidMount() {
        fetch('/main_page').then(resp => {
            return resp.json();
        }).then(body => {
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