import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Categories.css';


class Categories extends Component {
    state = {
        categories: []
    }

    componentDidMount() {
        let url = 'http://localhost:3001/categories'
        fetch(url)
            .then (resp => resp.json())
            .then(data => {
                let categories = data.map((category, index) => {
                    return (
                        <div key={index}>
                            <li className={classes.Category}>
                                <a href="/">{category.name} <span>240</span></a>  
                            </li>         
                        </div>
                    )
                })
                this.setState({categories: categories});
            })
    }

    render () {
        return (
            <Aux>
                <div className={classes.Container}>
                    <h2 className={classes.Title}>Categories</h2>
                    <ul className={classes.Categories}>
                    {this.state.categories}
                    </ul>
                </div>
            </Aux>
        );
    }
}

export default Categories;