import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';


import Layout from './components/Layout/Layout';
import Posts from './containers/Posts/Posts';
import Categories from './containers/Categories/Categories';
import Tags from './containers/Tags/Tags';
import Aux from './hoc/Aux';
import classes from './App.css'; 


class App extends Component {
  
  render() {
    return (
      <Aux>
        <BrowserRouter>
        <Layout>
          <div className={classes.App}>
            <div>
              <Posts />
            </div>

            <div className={classes.Container}>
              <Categories />
              <Tags /> 
            </div>
          </div>

        </Layout>
        </BrowserRouter>
      </Aux>
    );
  }
}

export default App;
