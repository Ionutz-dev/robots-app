import React from 'react';

import classes from './Scrollbar.module.css';

const scrollbar = props => {
  return <div className={classes.Scroll}>{props.children}</div>;
};

export default scrollbar;
