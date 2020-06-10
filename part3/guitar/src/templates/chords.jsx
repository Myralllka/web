import React from 'react';
import '../styles/colors.css';
import '../styles/main.css';
import '../styles/header_and_footer.css';
// import '../img/chords/E-major.jpg'

export default class Chords extends React.Component {
    state = {
        chords: []
    }

    componentDidMount() {
        fetch('/chords').then(resp => {
            return resp.json();
        }).then(body => {
            this.setState({
                chords: body
            })
        })
    }

    render() {
        return (
            <div className="body-page-element">
                <h1 className="header-element">Guitar chords</h1>
                <div className="main-element">
                    <h4 className="header-element"><a
                        href="https://www.libertyparkmusic.com/read-guitar-chord-diagrams/" target="_blank"
                        rel="noopener noreferrer">Source</a></h4>

                    {this.state.chords.map((entry) => {
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