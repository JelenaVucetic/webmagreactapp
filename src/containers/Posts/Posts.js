import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Posts.css';


class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        let url = 'http://localhost:3001/posts'
        fetch(url)
            .then (resp => resp.json())
            .then(data => {
                let posts = data.map((post, index) => {
                    return (
                        <div key={index} className={classes.Post}>
                            <div>
                                <img src={post.image} alt="img"/>
                            </div>
                            <div className={classes.PostMeta}> 
                                <a href="/">{post.category}</a>
                                <span>{post.date}</span>
                           
                                <h3>{post.title}</h3>
                                <p> {post.body}</p>
                            </div>
                        </div>
                    )
                })
                this.setState({posts: posts});
            })
    }

    

    render () {
        return (
            <Aux>
                {this.state.posts}
            </Aux>
        );
    }
}

export default Posts;