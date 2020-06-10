import React from 'react';
import '../styles/colors.css';
import '../styles/main.css';
import '../styles/header_and_footer.css';
import Iframe from 'react-iframe'

export default class Tuner extends React.Component {
    render() {
        return (
            <div className="body-page-element tuner">
                <Iframe src="/tuner-widget.html"
                        width="100%"
                        height="300px"
                        className="myClassname"
                        display="initial"
                        position="relative"
                        frameBorder="0"/>
                <a className="a_tuner" href="//www.leshylabs.com/" rel="nofollow">Created by Leshy Labs LLC</a>
            </div>
        )
    }
}