import React from 'react';
import '../styles/colors.css';
import '../styles/header_and_footer.css';
export default class Footer extends React.Component{
    constructor() {
        super();
        // this.state
    }
    render(){
        return(
            <div className="page-footer">
                <span>Made by Morhunenko Mykola</span>
            </div>
        )
    }
}