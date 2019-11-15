import React, { Component } from 'react'
import NewsCard from '../Cards/NewsCard'

export default class News extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: 'business',
            country: 'us'
        }
    }

    catChange = (e) => {
        this.setState({category: e.target.value});
    }

    countryChange = (e) => {
        this.setState({country: e.target.value})
    }

    render() {
        return (
            <React.Fragment>
                <h1 style={{textAlign: "center"}}>
                    <select onChange={this.catChange}>
                        <option value="business">Business</option>
                        <option value="sports">Sports</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="health">Health</option>
                        <option value="science">Science</option>
                        <option value="technology">Technology</option>
                    </select>
                    News from
                    <select onChange={this.countryChange}>
                        <option value="us">the US</option>
                        <option value="cn">China</option>
                        <option value="gb">England</option>
                        <option value="fr">France</option>
                        <option value="de">Germany</option>
                        <option value="ru">Russia</option>
                    </select>
                </h1>
                <h2 style={{textAlign: "center"}}>Click on any card to go to the full article</h2>
                <div className="flex-container">
                    <NewsCard category={this.state.category} country={this.state.country}/>
                </div>
            </React.Fragment>
        )
    }
}
