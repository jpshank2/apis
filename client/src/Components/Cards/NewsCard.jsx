import React, { Component } from 'react'

export default class NewsCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            news: []
        }
    }

    componentDidMount() {
        fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=02fd1262462240c4a64870445209d190`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                let news = data.articles.map(article => {
                    return (
                        <div className="card" key={article.url}>
                            <a target="_blank" rel="noopener noreferrer" href={article.url}>
                                <p className="title">{article.title}</p>
                                <p className="description">{article.description}</p>
                                <p className="byline">by: {article.author? article.author : "No Author"}</p>
                            </a>
                        </div>
                    )
                })
                this.setState({news: news})
            })
            .catch(data => {
                alert(data.message)
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.country !== prevProps.country || this.props.category !== prevProps.country) {
            fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=02fd1262462240c4a64870445209d190`)
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    let news = data.articles.map(article => {
                        return (
                            <div className="card" key={article.url}>
                                <a target="_blank" rel="noopener noreferrer" href={article.url}>
                                    <p className="title">{article.title}</p>
                                    <p className="description">{article.description}</p>
                                    <p className="byline">by: {article.author? article.author : "No Author"}</p>
                                </a>
                            </div>
                        )
                    })
                    this.setState({news: news})
                })
        }
    }

    render() {
        return (
            this.state.news
        )
    }
}
