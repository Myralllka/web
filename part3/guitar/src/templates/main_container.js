import React from 'react';
import '../styles/colors.css';
import '../styles/header_and_footer.css';
export default class Main extends React.Component{
    constructor() {
        super();
        // this.state
    }
    render(){
        return(
            <div className="main-page">
                <h1 className="header_element">Guitar assistant</h1>
                <h2 className="header_element">This site will help you if you want to start playing the Guitar and don`t know, how to do it.</h2>
                <p className="main_element">Here you can find metronome, all chords, notes, tuner and a lot of things that will help you to become better and better on your way. And remember - only systematic practice can move you to the goal! <br/>
                On this site there will be now advertisement, only really good advices. By the way, I started learning the guitar one months ago, so I will share with you only workable and joyful resources.
                </p>
                <h1 className="header_element">What guitar is it better to take?</h1>
                <h2 className="header_element">If you think, that there is no difference between guitars - you are totally wrong, because there are a lot of them. But three most popular are acoustic, classic and electric. So what is better?</h2>
                <p className="main_element">
                    <form action="#">
                        <h3 className="header_element">Have questions? Contact us!</h3>
                        <input type="email" placeholder="Your email"/>
                        <textarea rows="4" placeholder="Your question"></textarea>
                        <input type="submit" value="Send a question"/>
                    </form>
                </p>
            </div>
        )
    }
}