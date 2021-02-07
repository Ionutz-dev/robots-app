import React from 'react';
import classes from './Card.module.css';

const card = props => {
  return (
    <div className={classes.Card}>
      <img src={`https://robohash.org/${props.id}?200x200`} alt="robot" />
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
};

export default card;
