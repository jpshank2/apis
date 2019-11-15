import React, { Component } from 'react';

export default class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            message: ""
        }
    }

    nameChange = (e) => {
        this.setState({username: e.target.value});
    }

    messageChange = (e) => {
        this.setState({message: e.target.value})
    }

    submit = (e) => {
        fetch("http://localhost:3001/posts", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: this.state.username,
                text: this.state.message
            })
        })
        window.location.reload();
    }

    render() {
        return (
            <React.Fragment>
                <form className="form">
                    <label htmlFor="name">Username: </label>
                    <input type="text" name="name" onChange={this.nameChange} />
                    <br></br>
                    <label htmlFor="message">Message: </label>
                    <input type="text" name="message" onChange={this.messageChange} />
                    <br></br>
                    <input style={{margin: 0}} type="submit" value="POST" onClick={this.submit} />
                </form>
            </React.Fragment>
        )
    }
}
