import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../Images/ghibli-logo.png'

export default class GhibliFilms extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: []
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => {
                return res.json();
            })
            .then(data => {
                let films = data.map(film => {
                    return (
                        <div className="card" key={film.id}>
                            <p className="title">{film.title}</p>
                            <p className="description">{film.description}</p>
                        </div>
                    )
                })
                this.setState({films: films})
            })
    }

    render() {
        return (
            <React.Fragment>
                <img src={logo} alt="Studio Ghibli Logo" className="sm-logo" />
                <Link className="ghibli-link" to="/studio-ghibli/films">Films</Link>
                <Link className="ghibli-link" to="/studio-ghibli/people">People</Link>
                <h1 style={{textAlign: "center"}}>Studio Ghibli Films</h1>
                <div className="flex-container">
                    {this.state.films}
                </div>
            </React.Fragment>
        )
    }
}
