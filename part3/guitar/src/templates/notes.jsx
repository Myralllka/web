import React from 'react';
import '../styles/colors.css';
import '../styles/main.css';
import '../styles/header_and_footer.css';

export default class Notes extends React.Component {
    state = {
        notes: []
    }

    componentWillMount() {
        fetch('/notes').then(resp => {
            return resp.json();
        }).then(body => {
            console.log(body)
            this.setState({
                notes: body
            })
        })
    }

    render() {
        return (
            <div className="body-page-element">
                <h1 className="header-element">Learn The Notes On The Guitar</h1>
                <div className="main-element">
                    <h4 className="header-element"><a
                        href="https://www.leadguitarlessons.com/guitar-lessons/general/learn-the-notes-on-the-guitar.htm"
                        target="_blank"
                        rel="noopener noreferrer">Source</a></h4>
                    {this.state.notes.map((entry) => {
                        const Tag = entry.tag;
                        if (entry.src) {
                            return <img src={entry.src} className="chords-img" alt="Sorry..."/>
                        }
                        return <Tag className={entry.class}>{entry.body}</Tag>
                    })}
                </div>
            </div>
        )
    }
}