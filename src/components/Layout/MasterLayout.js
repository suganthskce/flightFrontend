import React, { Fragment } from 'react';
import Header from './../Global/Header';
import Notifications from 'react-notify-toast';
import './../../css/masterLayout.css';

const masterLayout = (props) => {

    return (
        <Fragment>
            <Notifications options={{ zIndex: 9999 }} />
            <Header />
            {props.children}
        </Fragment>
    )
}

export default masterLayout;