import React from 'react';

import classes from './../utils/Spinner.module.css';

const Spinner = () => (
    <div className={classes.center}>
    <div className={classes.Spinnerborder}></div>
    <h2>Loading ...</h2>

    </div>
);

export default Spinner;