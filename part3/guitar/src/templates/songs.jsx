import React from 'react';
import '../styles/colors.css';
import '../styles/main.css';
import '../styles/header_and_footer.css';

export default class Songs extends React.Component {
    state = {
        songs: []
    }

    componentWillMount() {
        fetch('/songs').then(resp => {
            return resp.json();
        }).then(body => {
            console.log(body)
            this.setState({
                songs: body
            })
        })
    }

    render() {
        return (
            <div className="body-page-element">
                <h1 className="header-element">The easiest songs for beginners</h1>
                <div className="main-element">
                    {this.state.songs.map((entry) => {
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