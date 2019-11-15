import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <section className="header">
                <Link className="link" to="/">Home</Link> | <Link className="link" to="/news">News</Link> | <Link className="link" to="/studio-ghibli">Ghibli Films</Link> | <Link className="link" to="/forum">Forum</Link> | <Link className="link" to="/about">About Me</Link>
            </section>
        )
    }
}