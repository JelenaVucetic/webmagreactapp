import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Tags.css';


class Tags extends Component {
    state = {
        tags: []
    }

    componentDidMount() {
        let url = 'http://localhost:3001/tags'
        fetch(url)
            .then (resp => resp.json())
            .then(data => {
                let tags = data.map((tag, index) => {
                    return (
                        <div key={index}>
                            <li>
                                <a href="/">{tag.name}</a>  
                            </li>         
                        </div>
                    )
                })
                this.setState({tags: tags});
            })
    }

    render () {
        return (
            <Aux>
                <ul className={classes.Tags}>
                    {this.state.tags}
                </ul>
            </Aux>
        );
    }
}

export default Tags;