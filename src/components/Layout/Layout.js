import React, { Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../Footer/Footer';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import { Route } from 'react-router-dom';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerOpenHandler = () => {
        this.setState({showSideDrawer:true});
    }

    sideDrawerClosedHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        } );
    }

    render () {
        return (   
        <Aux>
            <Toolbar clicked={this.sideDrawerOpenHandler} />
            <SideDrawer show={this.state.showSideDrawer} clicked={this.sideDrawerClosedHandler} />
            <header className={classes.Header}>
                <h4>Welcome</h4>
            </header>
            

            <Route path='/' exact render={() =>
                <main className={classes.Container}>
                <div className={classes.Row}>
                    {this.props.children}
                </div>
            </main>
                }/>
              
            <Route path='/about' exact render={()=> <h1>About us</h1>} />

            <Route path='/post' exact render={()=> <h1>Single post goes here</h1>} />
    
           <Footer />
        </Aux> 
        )
    }
}
export default Layout;