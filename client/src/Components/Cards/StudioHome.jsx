import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from "../../Images/ghibli-logo.png";

export default class StudioHome extends Component {
    render() {
        return (
            <React.Fragment>
                <img src={logo} alt="Studio Ghibli Logo" className="logo" />
                <div style={{textAlign: "center"}}>
                    <h1>Would you like to see Films or People?</h1>
                    <Link className="ghibli-link" to="/studio-ghibli/films">Films</Link>
                    <Link className="ghibli-link" to="/studio-ghibli/people">People</Link>
                </div>
            </React.Fragment>
        )
    }
}
