import React, { Component } from 'react'

export default class Forum extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "",
            pick: 0,
            posts: []
        }
    }

    edit = (e) => {
        this.setState({pick: e.target.id})
        document.getElementsByClassName(e.target.id)[0].style.display = "block";
    }

    submit = (e) => {
        console.log(this.state.pick)
        fetch("http://localhost:3001/posts", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: this.state.pick,
                text: this.state.message
            })
        })
        window.location.reload();
    }

    delete = (e) => {
        fetch("http://localhost:3001/posts", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: this.state.pick
            })
        })
        .then(res => res.json())
        window.location.reload()
    }

    messageChange = (e) => {
        this.setState({message: e.target.value})
    }

    componentDidMount() {
        fetch("http://localhost:3001/posts")
            .then(res => res.json())
            .then(data => {
                let posts = data.data.map(post => {
                    return (
                        <div className="forum-post" key={data.data.indexOf(post)}>
                            <h5>{post.user}</h5>
                            <p onClick={this.edit} id={data.data.indexOf(post)}>{post.text}</p>
                            <div className={data.data.indexOf(post)} style={{display: "none"}}>
                                <input type="text" onChange={this.messageChange}/>
                                <br></br>
                                <input type="submit" value='EDIT' onClick={this.submit}/>
                                <input type="submit" value='DELETE' onClick={this.delete} />
                            </div>
                        </div>
                    )
                })
                this.setState({ posts: posts })
            })
    }

    render() {
        return (
            <div>
                {this.state.posts}
            </div>
        )
    }
}
