import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <section className="content">
                <h1 className="header-name">Absolute Amusement with APIs</h1>
                <header>
                    <h2 style={{marginTop: 0}}>Welcome to the Ultimate API Compiler!</h2>
                    <h3>Click through the pages to see what you can do with an API!</h3>
                </header>
                <article>
                    <h4>What is an API?</h4>
                    <p>If you're new to programming, you might be wondering what an <strong>API</strong> is.</p>
                    <p>Don't worry! I'll explain it to you!</p>
                    <p className="definition" id="left">An <strong>API</strong> or <em>Application Programming Interface</em> is an interface or communication protocol between a client and a server intended to simplify the building of client-side software</p>
                    <p className="definition" id="right">Basically, an <strong>API</strong> determines how software components should interact and makes developing programs easier.</p>
                </article>
            </section>
        )
    }
}
