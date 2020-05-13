import React from 'react';
import '../styles/colors.css';
import '../styles/main.css';
import '../styles/header_and_footer.css';

export default class Tuner extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    componentWillMount() {
        let s = document.createElement('script');
        s.async = true;
        s.src = 'https://www.leshylabs.com/apps/tuner/widget.js';
        document.body.appendChild(s);
    }

    render() {
        return (
            <div className="body-page-element">
                <div id="leshyTuner" startDisabled="true">
                    <a href="//www.leshylabs.com/" rel="nofollow">Created by Leshy Labs LLC</a>
                </div>
            </div>
        )
    }
}