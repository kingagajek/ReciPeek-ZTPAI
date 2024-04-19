import React from 'react';
import classes from './LogoHeader.module.css';
import logo from '../../assets/icons/logo.svg';

export default function LogoHeader() {
    return (
        <a className={classes.backToHome} href="/home">
        <div className={classes.logoContainer}>
            <img className={classes.logo} src={logo} alt="logo" />
            <h1>Reci<span className="textPeach">Peek</span></h1>
        </div>
        </a>
);
}
