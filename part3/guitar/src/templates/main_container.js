import React from 'react';
import '../styles/colors.css';
import '../styles/header_and_footer.css';

export default class Main extends React.Component {
    constructor() {
        super();
        // this.state
    }

    render() {
        return (
            <div className="body-page-element">
                <h1 className="header-element">Guitar assistant</h1>
                <h2 className="header-element">This site will help you if you want to start playing the Guitar and don`t
                    know, how to do it.</h2>
                <p className="main-element">Here you can find metronome, all chords, notes, tuner and a lot of things
                    that will help you to become better and better on your way. And remember - only systematic practice
                    can move you to the goal! <br/>
                    On this site there will be now advertisement, only really good advices. By the way, I started
                    learning the guitar one months ago, so I will share with you only workable and joyful resources.
                </p>
                <h1 className="header-element">What guitar is it better to take?</h1>
                <h2 className="header-element">If you think, that there is no difference between guitars - you are
                    totally wrong, because there are a lot of them. But three most popular are acoustic, classic and
                    electric. So what is better?</h2>
                <div className="main-element">
                    <form action="#">
                        <h3 className="header-element">Have questions? Contact us!</h3>
                        <input type="email" placeholder="Your email"/>
                        <textarea rows="4" placeholder="Your question"/>
                        <input type="submit" value="Send a question"/>
                    </form>
                </div>
            </div>
        )
    }
}