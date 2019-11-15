import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import StudioHome from '../Cards/StudioHome';
import GhibliFilms from '../Cards/GhibliFilms';
import GhibliPeople from '../Cards/GhibliPeople';

export default class Ghibli extends Component {
    constructor(props) {
        super(props);

        this.state = {
            views: "home"
        }
    }

    seeFilms = () => {
        this.setState({ views: "films" })
    }

    seePeople = () => {
        this.setState({ views: "people" })
    }

    render() {
        return (
            <React.Fragment>
                <Router>
                    <Route exact path="/studio-ghibli" render={() => (
                        <StudioHome />
                    )} />
                    <Route exact path="/studio-ghibli/films" render={() => (
                        <GhibliFilms />
                    )} />
                    <Route exact path="/studio-ghibli/people" render={() => (
                        <GhibliPeople />
                    )} />
                </Router>
            </React.Fragment>)
    }
}
