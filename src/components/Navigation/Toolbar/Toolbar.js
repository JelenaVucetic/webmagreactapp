import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../../assets/images/logo.png'
const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={[classes.Container, classes.NavSlide].join(' ')}>
            <img src={Logo} alt='img'/>
            <div className={classes.Categories}>
                <div>Web Design</div>
                <div>Java Script</div>
                <div>CSS</div>
                <div>Jquery</div>
            </div>
            <div className={classes.NavBtns}>
                <div><i className="fa fa-search"></i></div>
                <button onClick={props.clicked}><i className="fa fa-bars" aria-hidden="true"></i></button>
            </div>
        </div>
    </header>
);

export default toolbar;