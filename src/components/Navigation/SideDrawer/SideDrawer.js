import React from 'react'; 
import classes from './SideDrawer.css';


const sideDrawer = (props) => (
        <div style ={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            className={classes.SideDrawer}>  
            <button onClick={props.clicked}> x </button>
            <h2>Home</h2>
            <h2>About Us</h2>
            <h2>Join Us</h2>
            <h2>Advertisement</h2>
            <h2>Contacts</h2>
        </div>
    );


export default sideDrawer;
