import React from "react";

export default class MyForm extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            question: ""
        }
    }

    onSubmit(event) {
        event.preventDefault();
        console.log(this.state, event);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={event => this.onSubmit(event)}>
                <label htmlFor="email" className="header-element">Have questions? Contact us!</label>
                <input name="email" type="email" placeholder="Your email" value={this.state.email}
                       onChange={e => this.handleChange(e)}/>
                <textarea name="question" rows="4" placeholder="Your question" value={this.state.question}
                          onChange={e => this.handleChange(e)}/>
                <input type="submit" value="Send a question"/>
            </form>
        )
    }
}