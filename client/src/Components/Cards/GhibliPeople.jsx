import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../Images/ghibli-logo.png'

export default class GhibliPeople extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: []
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => {
                return res.json();
            })
            .then(data => {
                let people = data.map(person => {
                    return (
                        <div className="card" key={person.id}>
                            <p className="title">{person.name}</p>
                            <p style={{textTransform: "capitalize"}} className="description">{person.age === "" ? "No Age" : person.age}, {person.gender}</p>
                            <a style={{textTransform: "uppercase", textAlign: "center", marginTop: 100}} href={person.url} target="_blank" rel="noopener noreferrer">More Info</a>
                        </div>
                    )
                })
                this.setState({people: people})
            })
    }

    render() {
        return (
            <React.Fragment>
                <img src={logo} alt="Studio Ghibli Logo" className="sm-logo" />
                <Link className="ghibli-link" to="/studio-ghibli/films">Films</Link>
                <Link className="ghibli-link" to="/studio-ghibli/people">People</Link>
                <h1 style={{textAlign: "center"}}>Studio Ghibli People</h1>
                <div className="flex-container">
                    {this.state.people}
                </div>
            </React.Fragment>
        )
    }
}
